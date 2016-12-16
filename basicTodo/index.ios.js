// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class basicTodo extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to my Basic Biotch todo app!!!!!
//         </Text>
//         <Text style={styles.instructions}>
//           You are a lucky to benefit from my hard work.
//         </Text>
//         <Text style={styles.instructions}>
//           FreeLoader. Figure it out
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('basicTodo', () => basicTodo);













import { AppRegistry, View } from 'react-native'

// Import the App container component
import BasicTodo from './BasicTodo'

AppRegistry.registerComponent('basicTodo', () => BasicTodo);










