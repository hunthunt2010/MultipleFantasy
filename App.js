import React, { Component } from 'react';
import ScoreBoard from './components/ScoreBoard';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {Provider, connect} from 'react-redux';
import reducer from './reducers'
import thunk from 'redux-thunk'
import {fetchMatchups} from './actions/Matchups';

const middleware = [thunk, createLogger()];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export class App extends Component {

  componentDidMount() {
    this.props.fetchMatchups();
  }

  _renderScoreboards(matchups) {
    return matchups.map((m, i) => {
      return <ScoreBoard key={i} leagueName={m.leagueName} homeTeam={m.homeTeam} awayTeam={m.awayTeam} homeScore={m.homeScore} awayScore={m.awayScore}/>
    });
  }

  render() {
    return (
      <ScrollView style={{
        flex: 1
      }}>
        <ActivityIndicator animating={this.props.fetching}/>
        {this._renderScoreboards(this.props.matchups)}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMatchups: () => {
      dispatch(fetchMatchups());
    }
  };
};

const mapStateToProps = state => {
  return state.matchups
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
