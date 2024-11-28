import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Dispaly = ({name ,email}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

export default Dispaly;

const styles = StyleSheet.create({});