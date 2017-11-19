import React, { Component } from 'react';
import ScoreBoard from './components/ScoreBoard';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {Provider, connect} from 'react-redux';
import reducer from './reducers'

const middleware = [createLogger()];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

function _renderScoreboards(matchups) {
  return matchups.map((_, i) => {
    return <ScoreBoard key={i} leagueName="Test" homeTeam="Home Team" awayTeam="Away Team" homeScore="100" awayScore="12"/>
  });
}

const App = (props) => {
  return (
    <Provider store={store}>
      <ScrollView style={{
        flex: 1
      }}>
        {_renderScoreboards(props.matchups)}
      </ScrollView>
    </Provider>
  );
}

function mapStateToProps (state) {
  return {
    matchups: state.matchups
  }
}

export default connect(mapStateToProps)(App)
