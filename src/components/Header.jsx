// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>GUDPLANS</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome6 name="magnifying-glass" size={24} iconStyle="solid" color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome6 name="bell" size={24} iconStyle="solid" color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#121212', // Color de fondo del encabezado
  },
  title: {
    color: 'red', // Color del título
    fontSize: 18, // Tamaño del título
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
  },
});

export default Header;