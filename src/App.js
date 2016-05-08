/* @flow */
'use strict';
import React, { Component } from 'react';
import { Router, Reducer } from 'react-native-router-flux'
import { StyleSheet,Text } from 'react-native';
import { loginUserByToken } from './actions/Auth/login';
import { connect } from 'react-redux';
import scenes from './scenes';

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
};

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(loginUserByToken());
  }

  render() {
    return (
      <Router createReducer={reducerCreate}  sceneStyle={styles.container} scenes={scenes} />
    );
  }

}


function mapStateToProps(state) {
  return {
    ...state
  }
}

const styles=  StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"transparent"
  },
});

export default connect(mapStateToProps)(App);