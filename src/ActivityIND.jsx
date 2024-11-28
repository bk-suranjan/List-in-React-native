import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const ActivityIND = () => {
  const [loading, setLoading] = useState(false);

  //use when we have to make use wait till  data show its is loading  screen

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.btnHide}
        onPress={() => setLoading((prevLoading) => !prevLoading)}
      >
        <Text style={styles.btnText}>{loading ? "Hide" : "Show"}</Text>
      </TouchableOpacity>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default ActivityIND;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  btnHide: {
    backgroundColor: 'darkblue',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: 'gray',
    fontSize: 16,
  },
});
