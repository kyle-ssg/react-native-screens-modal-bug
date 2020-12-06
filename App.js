/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, Modal, View, StatusBar} from 'react-native';

import {enableScreens, ScreenContainer, Screen} from 'react-native-screens';

enableScreens();

const App: () => React$Node = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Screen style={{flex: 1}} active>
        <View style={{flex: 1, backgroundColor: '#222'}}>
          <View style={{flex: 1}} />
          <Button title="Show Modal" onPress={() => setShowModal(true)} />
          <Modal
            visible={showModal}
            transparent={true}
            statusBarTranslucent={true}>
            <View style={{flex: 1}} />
            <Button title="Hide Modal" onPress={() => setShowModal(false)} />
          </Modal>
        </View>
      </Screen>
    </>
  );
};
export default App;
