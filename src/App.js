/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { changeCount, changeCountplus } from './actions/counts';
import { bindActionCreators } from 'redux';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigators/DrawerNavigator";
import ContactStackNavigator from "./navigators/StackNavigator";

// class App extends Component {
// decrementCount() {
//   let { count, actions } = this.props;
//   count--;
//   actions.changeCount(count);

// }
// incrementCount() {
//   let { count, actions } = this.props;
//   // count++;
//   actions.changeCountplus(count);
// }
// render() {
// const { count } = this.props;
// return (
//   <View styles={styles.container}>
//     <Button
//       title="increment"
//       onPress={() => this.incrementCount()}
//     />
//     <Text>{count}</Text>
//     <Button
//       title="decrement"
//       onPress={() => this.decrementCount()}
//     />
//   </View>
// );

//   }
// };
const App = () => {
  return <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign(
  {},
  { changeCount },
  { changeCountplus },
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;