import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/page-styles';
import Constants from '../app/Constants';
import Mole from './mole';
import Images from '../assets/Images';

const DEFAULT_TIME = 10;
const DEFAULT_STATE = {
  level: 1,
  score: 0,
  time: DEFAULT_TIME,
  cleared: false,
  paused: false,
  gameover: false,
  health: 100
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.moles = [];
    this.molesPopping = 0;
    this.state = DEFAULT_STATE;
    this.interval = null;
    this.timerInterval = null;
  }
  setupTicks = () => {
    let speed = 750 - (this.state.level * 50);
    if (speed < 350){
      speed = 350;
    }
    this.interval = setInterval(this.randomMole, 350)
    this.timerInterval = setInterval(this.timerTick, 1000);
  } 

  timerTick = () => {

    if (this.state.time === 0){
      clearTimeout(this.interval);
      clearTimeout(this.timerInterval)
      this.setState({
        cleared: true
      })
    } else{
      this.setState({
        time: this.state.time -1
      })
    }
  }


  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  randomMole = () => {
    if(this.moles.length != 12){
      return;
    }
    let randomIndex = this.randomBetween(0, 11);
    if(!this.moles[randomIndex].isPopping && this.molesPopping <3){
      this.molesPopping +=1;
      this.moles[randomIndex].pop();
    }
  }


  componentDidMount = () => {
    this.setupTicks();
  }

  onScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  onFinishPopping = (index) => {
    this.molesPopping -= 1;
}

  render(){
    let healthBarWidth = (Constants.MAX_WIDTH - Constants.XR * 100 - Constants.XR * 60 - Constants.XR * 6) * this.state.health / 100;
  return (
    <View>
      <Image style={styles.backgroundImage} resizeMode="stretch" source={Images.background} />
      <View style={styles.topPanel}>
                    <SafeAreaView>
                        <View style={styles.statsContainer}>
                            <View style={styles.stats}>
                                <View style={styles.levelContainer}>
                                    <Text style={styles.levelTitle}>Level</Text>
                                    <Text style={styles.levelNumber}>{this.state.level}</Text>
                                </View>
                            </View>
                            <View style={styles.stats}>
                                <View style={styles.timeBar}>
                                    <Text style={styles.timeNumber}>Timer:</Text>
                                    <Text style={styles.timeNumber}>{this.state.time}</Text>
                                </View>
                                <Image style={styles.timeIcon} resizeMode="stretch" source={Images.timeIcon} />
                            </View>
                            <View style={styles.stats}>
                                <View style={styles.scoreBar}>
                                    <Text style={styles.scoreNumber}>Score:</Text>
                                    <Text style={styles.scoreNumber}>{this.state.score}</Text>
                                </View>
                                <Image style={styles.scoreIcon} resizeMode="stretch" source={Images.scoreIcon} />
                            </View>
                            <View style={styles.stats}>
                                <TouchableWithoutFeedback onPress={this.pause}>
                                    <View style={styles.pauseButton}>
                                        <Image style={styles.pauseIcon} resizeMode="stretch" source={Images.pauseIcon} />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View style={styles.healthBarContainer}>
                            <View style={styles.healthBar}>
                                <View style={[styles.healthBarInner, { width: healthBarWidth}]} />
                            </View>
                            <Image style={styles.healthIcon} resizeMode="stretch" source={Images.healthIcon} />
                        </View>
                    </SafeAreaView>
                </View>
                <View style={styles.playArea}>
                    {Array.apply(null, Array(4)).map((el, rowIdx) => {
                        return (
                            <View style={styles.playRow} key={rowIdx}>
                                {Array.apply(null, Array(3)).map((el, colIdx) => {
                                    let moleIdx = (rowIdx * 3) + colIdx;

                                    return (
                                        <View style={styles.playCell} key={colIdx}>
                                            <Mole
                                                index={moleIdx}
                                                ref={(ref) => { this.moles[moleIdx] = ref }}
                                                onFinishPopping={this.onFinishPopping}
                                                onDamage={this.onDamage}
                                                onScore={this.onScore}
                                            />
                                        </View>

                                    )
                                })}
                            </View>
                        )
                    })}
                </View>
    <StatusBar style="auto" />
    </View>
  );
}}
