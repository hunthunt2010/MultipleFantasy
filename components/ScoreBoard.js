import React, {Component} from 'react';
import * as T from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ScoreBoardRow extends Component<{}> {
  render() {
    return (
      <View style={{flex: 2, backgroundColor: 'green', flexDirection: 'row'}}>
        <Text style={{flex: 3, backgroundColor: 'red', paddingTop: 10, fontWeight: 'bold', textAlign: 'center'}}>{this.props.teamName}</Text>
        <Text style={{flex: 1, backgroundColor: 'yellow', paddingTop: 10, fontWeight: 'bold', textAlign: 'center'}}>{this.props.score}</Text>
      </View>
    )
  }
}

class ScoreBoard extends Component {
  render() {
    return (
      <View style={{height: 100}}>
        <Text style={{flex: 1, backgroundColor: 'blue', paddingLeft: 10}}>{this.props.leagueName}</Text>
        <ScoreBoardRow teamName={this.props.awayTeam} score={this.props.awayScore}/>
        <ScoreBoardRow teamName={this.props.homeTeam} score={this.props.homeScore}/>
      </View>
    )
  }
}

ScoreBoard.propTypes = {
  leagueName: T.string,
  homeTeam: T.string,
  awayTeam: T.string,
  homeScore: T.number,
  awayScore: T.number
};

ScoreBoard.propTypes = {
  teamName: T.string,
  score: T.number
};

export default ScoreBoard;
