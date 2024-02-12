import React, { Component } from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import styles from '../styles/page-styles';
import Images from '../assets/Images';
import SpriteSheet from '../SpriteSheet';

export default class Mole extends Component {
    constructor(props){
        super(props);

        this.mole = null;
        this.actionTimeout = null;
        this.isPopping = false;
        this.isFeisty = false;
        this.isHealing = false;
        this.isWhacked = false;
        this.isAttacking = false;
    }

    popStephen = () =>{
        this.isPopping = true;
        this.isWhacked = false;

        this.mole.play({
            type: "stephenMole",
            fps: 24,
            onFinish: () => {
                this.actionTimeout = setTimeout(() => { 
                    this.mole.play({
                        type: "hideStephen",
                        fps: 24,
                        onFinish: () => {
                            this.isPopping = false;
                            this.props.onFinishPopping(this.props.index);
                        }
                    })
                },1000);
            }
        })
    }

    
    
    whackStephen = () =>{
        if(!this.isPopping || this.isWhacked){
            return;
        }
        if (this.actionTimeout){
            clearTimeout(this.actionTimeout);
        }
        this.isWhacked = true;

        this.props.onScore();

        this.mole.play({
            type: "staticStephen",
            onFinish: () => {
                this.mole.play({
                    type: "faintStephen",
                    onFinish: () => {
                        this.isPopping = false;
                        this.props.onFinishPopping(this.props.index);
                    }
                })
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <SpriteSheet
                    ref={ref => (this.mole = ref)}
                    source={Images.sprites}
                    columns={5}
                    rows={4}
                    width={120}
                    animations={{
                        hole: [0],
                        timMole: [1, 2, 3, 4],
                        hideTim: [4, 3, 2, 1, 0],
                        faintTim: [7, 8, 9, 0],
                        staticTim: [7, 7],
                        stephenMole: [10, 11, 12, 13, 14],
                        hideStephen: [13, 12, 11, 10, 19],
                        faintStephen: [15, 16, 17, 18, 19],
                        staticStephen: [13, 14]
                    }}
                />
                <TouchableWithoutFeedback onPress={this.whackStephen} style={{ position: 'absolute', top:0, bottom:0, left:0, right:0}}>
                    <View style={{ position: 'absolute', top:0, bottom:0, left:0, right:0}}></View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}