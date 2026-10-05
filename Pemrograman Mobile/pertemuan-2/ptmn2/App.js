import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';


const PROFILE = {
  name: 'Muhammad Dhiyaul Haque',
  title: 'Mahasiswa',
  email: 'elhaqq2106@gmail.com',
  phone: '085706079645',
  location: 'Jawa Barat, Indonesia',
  bio:
    'Saya adalah seorang mahasiswa yang sedang belajar React Native. Saya tertarik dengan pengembangan aplikasi mobile dan ingin mengembangkan keterampilan saya di bidang ini.',

  avatar: require('./assets/foto-profile.png'),
};

const SKILLS = [
  {id: '1',name: 'Python',level: 80,color: '#1717ff', },
  {id: '2',name: 'React Native',level: 60,color: '#ff8c00', },
  {id: '3',name: 'HTML',level: 90,color: '#008000',},
  {id: '4',name: 'CSS',level: 85,color: '#d0009b',},
  {id: '5',name: 'Javascript',level: 50,color: '#ffff00',},
  {id: '6',name: 'Git',level: 75,color: '#ff4f32',},
  {id: '7',name: 'UI/UX Design',level: 65,color: '#9b59b6',},
  {id: '8',name: 'SQL',level: 65,color: '#3498db',},
];

const EDUCATION = [
  {id: '1',title: 'S1 Informatika',place: 'Universitas',period: '2024 - Sekarang',},
  {id: '2',title: 'SMA / Sederajat',place: 'Sekolah Menengah',period: '2021 - 2024',},
];

const EXPERIENCES = [
  {id: '1',title: 'Frontend Developer',place: 'Project Development',period: '2024 - Sekarang',},
  {id: '2',title: 'Anggota Organisasi',place: 'Organisasi Kemahasiswaan',period: '2024 - Sekarang',},
];

const SkillItem = ({ item }) => {
  return (
    <View style={styles.skillCard}>
      <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.skillPercent}>{item.level}%</Text>
      <View style={styles.progressBackground}>
        <View  style={[styles.progressFill,{      
          width: `${item.level}%`,      
          backgroundColor: item.color,    
          },  
        ]}/>
      </View>
    </View>
  );
};

export default function App() {
  const [openToWork, setOpenToWork] =useState(true);  
  const [modalVisible, setModalVisible] =useState(false);  
  const [selectedItem, setSelectedItem] =useState(null);  
  const [senderName, setSenderName] =useState('');  
  const [message, setMessage] =useState('');  
  const [sending, setSending] =useState(false);

  const showDetail = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const downloadCV = () => {Alert.alert('Download CV','Fitur download CV berhasil dijalankan.');};
  const openSocial = (name) => {Alert.alert(name, `Membuka profil ${name}`);};

  const sendMessage = () => {
    if (senderName.trim() === '' || message.trim() === '') {
      Alert.alert('Peringatan', 'Nama dan pesan harus diisi.');
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      Alert.alert('Berhasil', 'Pesan berhasil dikirim.');
      setSenderName('');
      setMessage('');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#151427"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.scrollContainer
        }>

        <View style={styles.topHeader}>
          <Text style={styles.headerTitle}>Curriculum Vitae</Text>
          <View style={styles.openWorkContainer}>
            <Text style={styles.openWorkText}>Open</Text>
            <Switch
              value={openToWork}
              onValueChange={setOpenToWork}
              trackColor={{
                false: '#555',
                true: '#35c77b',
              }}
              thumbColor="#ffffff"
            />
          </View>
        </View>
        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <Image source={PROFILE.avatar} style={styles.avatar}/>
          </View>
          {openToWork && (
            <View style={styles.openBadge}>
              <Text style={styles.openBadgeText}>Open to Work</Text>
            </View>
          )}
          <Text style={styles.name}>\{PROFILE.name}</Text>
          <Text style={styles.title}>\{PROFILE.title}</Text>
          <Text style={styles.bio}>\{PROFILE.bio}</Text>

          <View style={styles.contactRow}>
            <Text style={styles.contactText}>{PROFILE.email}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.contactText}>{PROFILE.location}</Text>
          </View>
          <Text style={styles.phone}>{PROFILE.phone}</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => openSocial('Instagram')}
              activeOpacity={0.7}
            >
              <Text style={styles.socialIcon}>\IG</Text>
              <Text style={styles.socialText}>\Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() =>openSocial('GitHub')}
              activeOpacity={0.7}
            >
              <Text style={styles.socialIcon}>Git</Text>
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>
          </View>

          <Pressable onPress={downloadCV} style={({ pressed }) => [styles.downloadButton, pressed && styles.downloadPressed,]}>
            <Text style={styles.downloadText}>
              Download CV (PDF)
            </Text>
          </Pressable>
        </View>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Keahlian</Text>
          <Text style={styles.sectionDescription}>FlatList menampilkan data secara efisien</Text>
          <FlatList
            data={SKILLS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (<SkillItem item={item}/>)}
            scrollEnabled={false}
          />
        </View>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Pendidikan</Text>
          {EDUCATION.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.historyCard}
              onPress={() => showDetail(item)}
              activeOpacity={0.7}
            >
              <View style={styles.historyDot} />
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>{item.title}</Text>
                <Text style={styles.historyPlace}>{item.place}</Text>
                <Text style={styles.historyPeriod}>{item.period}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            Pengalaman & Organisasi
          </Text>
          {EXPERIENCES.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.historyCard}
              onPress={() => showDetail(item)}
              activeOpacity={0.7}
            >
              <View style={styles.historyDot} />
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>{item.title}</Text>
                <Text style={styles.historyPlace}>{item.place}</Text>
                <Text style={styles.historyPeriod}>{item.period}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios'  ? 'padding'  : 'height'}
        >
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>Hubungi Saya</Text>
            {/* Nama */}
            <Text style={styles.inputLabel}>Nama</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan nama"
              placeholderTextColor="#777"
              value={senderName}
              onChangeText={setSenderName}
            />
            {/* Pesan */}
            <Text style={styles.inputLabel}>Pesan</Text>
            <TextInput
              style={[styles.input,styles.messageInput,]}
              placeholder="Tulis pesan..."
              placeholderTextColor="#777"
              value={message}
              onChangeText={setMessage}
              multiline
            />
            {/* Tombol */}
            <TouchableOpacity
              style={styles.sendButton}
              onPress={sendMessage}
              disabled={sending}
              activeOpacity={0.8}
            >
              {sending ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator color="#ffffff"/>
                  <Text style={styles.sendText}>Mengirim... </Text>
                </View>
              ) : (<Text style={styles.sendText}> Kirim Pesan</Text>)}
            </TouchableOpacity>
            <Button title="Reset Form" onPress={() => {setSenderName('');setMessage('');}}/>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() =>
          setModalVisible(false)
        }
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Detail</Text>
            {selectedItem && (
              <>
                <Text style={styles.modalItemTitle}>{selectedItem.title}</Text>
                <Text style={styles.modalItemText}>{selectedItem.place}</Text>
                <Text style={styles.modalItemText}>{selectedItem.period}</Text>
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}    
              onPress={() => {
                setModalVisible(false);
                setSelectedItem(null);
              }}>
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#111020',
  },

  scrollContainer: {
    paddingBottom: 30,
  },

  topHeader: {
    height: 62,
    backgroundColor: '#17162b',
    borderBottomWidth: 1,
    borderBottomColor: '#282640',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  openWorkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  openWorkText: {
    color: '#ffffff',
    fontSize: 10,
    marginRight: 3,
  },

  profileCard: {
    backgroundColor: '#17162b',
    marginBottom: 12,
    paddingTop: 25,
    paddingBottom: 22,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderBottomWidth: 2,
    borderBottomColor: '#5525a5',
  },

  avatarWrapper: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 2,
    borderColor: '#8c21ff',
    padding: 2,
    marginBottom: 8,
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 46,
  },

  openBadge: {
    borderWidth: 1,
    borderColor: '#2ecc71',
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 3,
    marginBottom: 8,
  },

  openBadgeText: {
    color: '#48d27a',
    fontSize: 10,
  },

  name: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
  },

  title: {
    color: '#9f8bd4',
    fontSize: 11,
    marginBottom: 12,
  },

  bio: {
    color: '#8f8ca0',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    maxWidth: 350,
    marginBottom: 10,
  },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactText: {
    color: '#8f8ca0',
    fontSize: 9,
  },

  dot: {
    color: '#777',
    marginHorizontal: 7,
  },

  phone: {
    color: '#8f8ca0',
    fontSize: 9,
    marginTop: 5,
  },

  socialContainer: {
    flexDirection: 'row',
    marginTop: 14,
    gap: 7,
  },

  socialButton: {
    width: 64,
    height: 47,
    borderWidth: 1,
    borderColor: '#2c2943',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17162b',
  },

  socialIcon: {
    color: '#ffffff',
    fontSize: 12,
    marginBottom: 2,
  },

  socialText: {
    color: '#8f78c5',
    fontSize: 8,
  },

  downloadButton: {
    marginTop: 17,
    width: 150,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#54209d',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#812fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },

  downloadPressed: {
    opacity: 0.6,
    transform: [
      {scale: 0.96,},
    ],
  },

  downloadText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '600',
  },

  sectionCard: {
    backgroundColor: '#18172d',
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#292642',
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },

  sectionDescription: {
    color: '#777487',
    fontSize: 9,
    fontStyle: 'italic',
    marginBottom: 10,
  },

  skillCard: {
    backgroundColor: '#12254a',
    borderWidth: 1,
    borderColor: '#1d3766',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 7,
  },

  skillName: {
    color: '#eeeeee',
    fontSize: 10,
    marginBottom: 1,
  },

  skillPercent: {
    color: '#b4a8d4',
    fontSize: 9,
    marginBottom: 3,
  },

  progressBackground: {
    width: '100%',
    height: 6,
    backgroundColor: '#08162d',
    borderRadius: 5,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 5,
  },

  historyCard: {
    backgroundColor: '#12254a',
    borderWidth: 1,
    borderColor: '#1d3766',
    borderRadius: 9,
    padding: 12,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  historyDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7038d4',
    marginRight: 10,
  },

  historyContent: {
    flex: 1,
  },

  historyTitle: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },

  historyPlace: {
    color: '#aaa2bd',
    fontSize: 10,
    marginTop: 3,
  },

  historyPeriod: {
    color: '#777487',
    fontSize: 9,
    marginTop: 3,
  },

  inputLabel: {
    color: '#aaa2bd',
    fontSize: 10,
    marginBottom: 5,
    marginTop: 8,
  },

  input: {
    backgroundColor: '#101d38',
    borderWidth: 1,
    borderColor: '#263c63',
    borderRadius: 8,
    color: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 9,
    fontSize: 11,
  },

  messageInput: {
    height: 90,
    textAlignVertical: 'top',
  },

  sendButton: {
    backgroundColor: '#54209d',
    borderRadius: 9,
    paddingVertical: 11,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 10,
  },

  sendText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '600',
  },

  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.65)',
    justifyContent: 'center',
    padding: 20,
  },

  modal: {
    backgroundColor: '#1b1932',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#5e39a5',
  },

  modalTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },

  modalItemTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },

  modalItemText: {
    color: '#aaa2bd',
    fontSize: 12,
    marginTop: 6,
  },

  closeButton: {
    backgroundColor: '#54209d',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 18,
  },
  
  closeButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});