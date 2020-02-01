/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Chip from './source/components/Chips/Chip';


const data = [
  {
    label: 'Main'
  },
  {
    label: 'Side Calendar'
  },
  {
    label: 'Home Work'
  },
  {
    label: 'Jax'
  },
  {
    label: 'Tests'
  }
];

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1, justifyContent:"center", alignItems:"flex-start"}}>
        <FlatList
          data={data}
          renderItem={({item}) => <Chip 
                                    action={() => {}}
                                    color={'#FF9100'}
                                    highlightColor={'#FFB85C'}
                                    iconName={'times'}
                                    text={item.label}
                                    style={{marginRight: 8, marginBottom: 8}}/>}
          keyExtractor={item => item.label}
          
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}/>

        {/* <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
          <Chip
            action={() => {}}
            color={'#FF9100'}
            highlightColor={'#FFB85C'}
            iconName={'times'}
            text='Hello'/>
          <Chip
            action={() => {}}
            color={'#FF9100'}
            highlightColor={'#FFB85C'}
            iconName={'times'}
            text='Hello world'/>
          <Chip
            action={() => {}}
            color={'#FF9100'}
            highlightColor={'#FFB85C'}
            iconName={'times'}
            text='Hello world'/>
          <Chip
            action={() => {}}
            color={'#FF9100'}
            highlightColor={'#FFB85C'}
            iconName={'times'}
            text='Hello world'/>
          <Chip
            action={() => {}}
            color={'#FF9100'}
            highlightColor={'#FFB85C'}
            iconName={'times'}
            text='Hello world'/>
          <Chip
            action={() => {}}
            color={'#FF9100'}
            highlightColor={'#FFB85C'}
            iconName={'times'}
            text='Hello world'/>
        </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
