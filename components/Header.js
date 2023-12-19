import React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import style from '../style/style';
import { loadFonts } from '../assets/fonts/fonts';




export default function Header(){



    return (
        <View style={style.header}>
        <Text style={style.title}>
        Mini-Yahtzee!

        </Text>
        </View>
    )
};