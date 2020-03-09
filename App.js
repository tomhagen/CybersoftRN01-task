/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text} from 'react-native';
import Emoji from './components/Emoji';
import Glass from './components/Glass';
import Zalo from './components/Zalo';

const App = () => {
  return (
    <>
      {/*------------ Bỏ comment để render UI của từng bài tập ---------------*/}
      {/* <Emoji /> */}
      {/* <Glass /> */}
      <Zalo />
    </>
  );
};

export default App;
