import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
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
  Platform,
} from 'react-native';

const PROFILE = {
  name: 'Muhammad Dhiyaul Haque',
  title: 'Mobile Developer',
  email: 'elhaqq2106@gmail.com',
  phone: '085706079645',
  location: 'Pasuruan, Jawa Timur',
  bio: 'Pengembang aplikasi mobile yang berfokus pada teknologi React Native dan Flutter',
  avatarOffline: 'assets/foto-profile.png',
};

const SKILLS = [
  {id: '1', name: 'React Native', level: 90, color: '#61dafb'},
  {id: '2', name: 'Flutter', level: 80, color: '#02569B'},
  {id: '3', name: 'JavaScript', level: 85, color: '#f7df1e'},
  {id: '4', name: 'TypeScript', level: 70, color: '#3178c6'},
  {id: '5', name: 'Node.js', level: 75, color: '#3776ab'},
  {id: '6', name: 'Firebase', level: 65, color: '#00B4AB'},
];


const SECTION = [
  {
    title: '🏫 Pendidikan',
    data: [
      {
        id: '1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Syekh Nurjati Cirebon',
        period: '2024 - 2029',
        location: 'Cirebon, Jawa Barat',
      },
    ],
  },
  {
    title: '💼 Pengalaman Kerja',
    data: [
      {
        id: '2',
        role: 'Frontend Developer',
        company: 'Frontend Development',
        period: '2024 - Present',
        location: 'Jakarta, Indonesia',
      },
    ],
  },
];

// ===============================
// DATA SOCIAL
// ===============================

const SOCIAL = [
  {id: '1', name: 'GitHub', url: 'https://github.com/dhiyaulhaqq21'},
  {id: '2', name: 'Instagram', url: 'https://www.instagram.com/elhaq__ue2106/'},
];

const SkillCard = ({ item }) => (
  <View style={styles.skillCard}>

    <View style={styles.skillHeader}>
      <Text style={styles.skillName}>
        {item.name}
      </Text>

      <Text style={styles.skillPercent}>
        {item.level}%
      </Text>
    </View>

    <View style={styles.progressBg}>
      <View
        style={[
          styles.progressFill,
          {
            width: `${item.level}%`,
            backgroundColor: item.color,
          },
        ]}
      />
    </View>

  </View>
);

// SUB COMPONENT : TIMELINE CARD

const TimelineCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.timelineCard}
    onPress={() => onPress(item)}
    activeOpacity={0.75}
  >

    <View style={styles.timelineDot} />

    <View style={styles.timelineContent}>

      <Text style={styles.timelineRole}>
        {item.role}
      </Text>

      <Text style={styles.timelineCompany}>
        {item.company}
      </Text>

      <Text style={styles.timelinePeriod}>
        {item.period}
      </Text>

      <Text style={styles.timelineLocation}>
        📍 {item.location}
      </Text>

      <Text style={styles.timelineHint}>
        Ketuk untuk melihat detail
      </Text>

    </View>

  </TouchableOpacity>
);


export default function App() {

  const [openToWork, setOpenToWork] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const [senderName, setSenderName] = useState('');

  const [message, setMessage] = useState('');

  const [sending, setSending] = useState(false);

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSend = () => {

    if (!senderName.trim() || !message.trim()) {

      Alert.alert(
        'Error',
        'Nama dan pesan tidak boleh kosong'
      );

      return;
    }

    setSending(true);

    setTimeout(() => {

      setSending(false);

      Alert.alert(
        'Success',
        `Pesan dari ${senderName} berhasil dikirim`
      );

      setSenderName('');
      setMessage('');
      setModalVisible(false);

    }, 2000);
  };

  // ===============================
  // RENDER
  // ===============================

  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#1a1a2e"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* ================= HEADER ================= */}

        <View style={styles.header}>

          <Text style={styles.headerTitle}>
            Curriculum Vitae
          </Text>

          <View style={styles.switchRow}>

            <Text style={styles.switchLabel}>
              {openToWork
                ? 'Sedang Mencari Pekerjaan'
                : 'Tidak Sedang Mencari Pekerjaan'}
            </Text>

            <Switch
              value={openToWork}
              onValueChange={(value) => setOpenToWork(value)}
              trackColor={{
                false: '#767577',
                true: '#81b0ff',
              }}
              thumbColor={
                openToWork
                  ? '#f5dd4b'
                  : '#f4f3f4'
              }
            />

          </View>

        </View>

        {/* ================= PROFILE ================= */}

        <View style={styles.profileCard}>

          <View style={styles.avatar}>

            <Image
              source={require('foto-profile.png')}
              style={styles.avatarImage}
            />

          </View>

          <Text style={styles.profileName}>
            {PROFILE.name}
          </Text>

          <Text style={styles.profileTitle}>
            {PROFILE.title}
          </Text>

          <Text style={styles.profileBio}>
            {PROFILE.bio}
          </Text>

        </View>

        {/* ================= CONTACT ================= */}

        <View style={styles.sectionContainer}>

          <Text style={styles.sectionTitle}>
            📞 Kontak
          </Text>

          <View style={styles.infoCard}>

            <Text style={styles.infoText}>
              📧 {PROFILE.email}
            </Text>

            <Text style={styles.infoText}>
              📱 {PROFILE.phone}
            </Text>

            <Text style={styles.infoText}>
              📍 {PROFILE.location}
            </Text>

          </View>

        </View>

        {/* ================= SKILLS ================= */}

        <View style={styles.sectionContainer}>

          <Text style={styles.sectionTitle}>
            💻 Skills
          </Text>

          {SKILLS.map((item) => (
            <SkillCard
              key={item.id}
              item={item}
            />
          ))}

        </View>

        {/* ================= EDUCATION & EXPERIENCE ================= */}

        <View style={styles.sectionContainer}>

          <Text style={styles.sectionTitle}>
            📚 Pendidikan & Pengalaman
          </Text>

          {SECTION.map((section) => (

            <View key={section.title}>

              <Text style={styles.subSectionTitle}>
                {section.title}
              </Text>

              {section.data.map((item) => (

                <TimelineCard
                  key={item.id}
                  item={item}
                  onPress={handleCardPress}
                />

              ))}

            </View>

          ))}

        </View>

        {/* ================= SOCIAL ================= */}

        <View style={styles.sectionContainer}>

          <Text style={styles.sectionTitle}>
            🌐 Social Media
          </Text>

          {SOCIAL.map((item) => (

            <TouchableOpacity
              key={item.id}
              style={styles.socialCard}
              onPress={() => {
                Alert.alert(
                  item.name,
                  item.url
                );
              }}
            >

              <Text style={styles.socialName}>
                {item.name}
              </Text>

              <Text style={styles.socialUrl}>
                {item.url}
              </Text>

            </TouchableOpacity>

          ))}

        </View>

        {/* ================= CONTACT BUTTON ================= */}

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => setModalVisible(true)}
          >

            <Text style={styles.contactButtonText}>
              Hubungi Saya
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

      {/* ================= MODAL ================= */}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalContainer}>

            {/* Jika timeline dipilih */}

            {selectedItem && (
              <View>

                <Text style={styles.modalTitle}>
                  Detail
                </Text>

                <Text style={styles.modalRole}>
                  {selectedItem.role}
                </Text>

                <Text style={styles.modalCompany}>
                  {selectedItem.company}
                </Text>

                <Text style={styles.modalInfo}>
                  📅 {selectedItem.period}
                </Text>

                <Text style={styles.modalInfo}>
                  📍 {selectedItem.location}
                </Text>

              </View>
            )}

            <Text style={styles.modalTitle}>
              Hubungi Saya
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nama"
              placeholderTextColor="#999"
              value={senderName}
              onChangeText={setSenderName}
            />

            <TextInput
              style={[
                styles.input,
                styles.messageInput,
              ]}
              placeholder="Pesan"
              placeholderTextColor="#999"
              value={message}
              onChangeText={setMessage}
              multiline
            />

            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSend}
              disabled={sending}
            >

              {sending ? (

                <ActivityIndicator
                  color="#fff"
                />

              ) : (

                <Text style={styles.sendButtonText}>
                  Kirim Pesan
                </Text>

              )}

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setModalVisible(false);
                setSelectedItem(null);
              }}
            >

              <Text style={styles.closeButtonText}>
                Tutup
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </SafeAreaView>
=======
   <View style={styles.container}>
      <Text>Nama : Muhammad Dhiyaul Haque</Text>
      <Text>NIM : 2488010041</Text>
      <Text>Asal Sekolah : SMA I Plus Hidayatut Thullab Kediri</Text>
      <Text>Cita-Cita : Programmer</Text>
      <Text>Rencana Menggapai Cita-Cita : Membuat aplikasi mobile yang bermanfaat</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> 729ef8a7f19024477ea6eb3f5efd129c414cdc51
  );
}

// ===============================
// STYLES
// ===============================

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  switchLabel: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
    marginRight: 10,
  },

  profileCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },

  profileTitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },

  profileBio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 21,
  },

  sectionContainer: {
    marginHorizontal: 16,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 12,
  },

  subSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 8,
    marginBottom: 10,
  },

  infoCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },

  infoText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },

  skillCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  skillName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },

  skillPercent: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },

  progressBg: {
    height: 8,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    borderRadius: 10,
  },

  timelineCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    elevation: 2,
  },

  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1a1a2e',
    marginTop: 5,
    marginRight: 12,
  },

  timelineContent: {
    flex: 1,
  },

  timelineRole: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },

  timelineCompany: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },

  timelinePeriod: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  timelineLocation: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },

  timelineHint: {
    fontSize: 11,
    color: '#999',
    marginTop: 8,
    fontStyle: 'italic',
  },

  socialCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  socialName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },

  socialUrl: {
    fontSize: 13,
    color: '#555',
    marginTop: 5,
  },

  buttonContainer: {
    marginHorizontal: 16,
    marginBottom: 30,
  },

  contactButton: {
    backgroundColor: '#1a1a2e',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },

  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 15,
  },

  modalRole: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  modalCompany: {
    fontSize: 15,
    color: '#555',
    marginTop: 5,
    marginBottom: 10,
  },

  modalInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: '#222',
    marginBottom: 12,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },

  sendButton: {
    backgroundColor: '#1a1a2e',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  closeButton: {
    backgroundColor: '#eee',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  closeButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
