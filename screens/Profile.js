import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = () => {
  return (
    <>
      <View style={styles.root}>
        <LinearGradient
          colors={['#0033ff', '#6bc1ff']}
          style={{ height: '20%' }}
        />
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{
              width: 140,
              height: 140,
              borderRadius: 140 / 2,
              marginTop: -50,
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
