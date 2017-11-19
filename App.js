import React, { Component } from 'react';
import ScoreBoard from './components/ScoreBoard';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Button
} from 'react-native';
import { Button as Button2, SocialIcon } from 'react-native-elements';
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
      <View style={{flex: 1}}>
        <ScrollView style={{marginLeft: 10, marginRight: 10, marginBottom: 10}}>
          <ActivityIndicator animating={this.props.fetching}/>
          {this._renderScoreboards(this.props.matchups)}
          <Button onPress={this.props.fetchMatchups} title="Learn More"/>
        </ScrollView>
        <View style={{bottom: 10, right: 0, position: 'absolute'}}>
          <Button2 raised rounded transparent buttonStyle={{backgroundColor: 'black'}} containerViewStyle={{borderRadius: 100, width: 65}} textStyle={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}} title={'+'}/>
        </View>
        {/* <Button2 raised icon={{name: 'home'}} buttonStyle={{backgroundColor: 'black', borderRadius: 10, right: 0}} textStyle={{textAlign: 'center'}} title={'kldsajflkjasdf'}/> */}
      </View>
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
