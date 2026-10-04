import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama : Muhammad Dhiyaul Haque</Text>
      <Text>NIM : 2488010041</Text>
      <Text>Asal Sekolah : SMA I Plus Hidayatut Thullab Kediri</Text>
      <Text>Cita-Cita : Mobile Developer</Text>
      <Text>Rencana Menggapai Cita-Cita : Membuat aplikasi mobile yang bermanfaat</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
