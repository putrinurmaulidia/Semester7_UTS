import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Pastikan untuk menginstal pustaka ini

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aplikasi Absensi Siswa</Text>

      {/* Ringkasan Kehadiran */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total Kehadiran: 20</Text>
        <Text style={styles.summaryText}>Total Ketidakhadiran: 5</Text>
        <Text style={styles.summaryText}>Persentase Kehadiran: 80%</Text>
      </View>

      {/* Tombol Aksi Cepat */}
      <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Catat Kehadiran Pressed')}>
        <Text style={styles.buttonText}>Catat Kehadiran</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Lihat Laporan Pressed')}>
        <Text style={styles.buttonText}>Lihat Laporan</Text>
      </TouchableOpacity>

      {/* Notifikasi */}
      <View style={styles.notifications}>
        <Text style={styles.notificationText}>Notifikasi: Jangan lupa untuk mencatat kehadiran!</Text>
      </View>

      {/* Kalender */}
      <Calendar
        style={styles.calendar}
        // Anda dapat menambahkan properti lain sesuai kebutuhan
        onDayPress={(day) => {
          console.log('Selected day', day);
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#1976D2',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  summary: {
    backgroundColor: '#E1E7FF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    marginVertical: 5,
  },
  actionButton: {
    backgroundColor: '#1976D2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notifications: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  notificationText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  calendar: {
    marginTop: 20,
  },
});