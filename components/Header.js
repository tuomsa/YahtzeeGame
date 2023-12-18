import React from 'react';
import { Text, View } from 'react-native';
import style from '../style/style.js';

export default function Header(){
    return (
        <View style={style.header}>
        <Text style={style.title}>
        Mini-Yahtzee!

        </Text>
        </View>
    )
};