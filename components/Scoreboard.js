import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NBR_OF_SCOREBOARD_ROWS, SCOREBOARD_KEY } from '../constants/Game.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../style/style.js';
import Header from './Header.js';
import Footer from './Footer.js';



export default Scoreboard = ({ navigation }) => {


const [scores,setScores] = useState([]);


const getScoreBoardData = async() => {
    try {
        const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
        if(jsonValue !== null) {
            let tmpScores = JSON.parse(jsonValue);
            setScores(tmpScores);
        }
    }
    catch(e){
        console.log('error' + e);
    }
    
}


useEffect(() => {
    const unsubscribe = navigation.addListener('focus',() => {
        getScoreBoardData
    });
    return unsubscribe;
},[navigation]);

const clearScoreboard = async() => {
    try {
        await AsyncStorage.clear();
        setScores([]);
    }
    catch(e){
        console.log('error clearing' + e)
    }
}




    return (
     <>
        <Header/>
        <View>
        <Text>SCOREBOARDS</Text>
        {scores.length === 0 ?
        <Text>Scoreboard is empty</Text>
        :
        scores.map((player, index) => (
            index < NBR_OF_SCOREBOARD_ROWS &&
            <DataTable.Row key={player.key}>
                <DataTable.Cell> <Text>{index + 1}.</Text></DataTable.Cell>
                <DataTable.Cell> <Text>{player.name}</Text></DataTable.Cell>
                <DataTable.Cell> <Text>{player.date}</Text></DataTable.Cell>
                <DataTable.Cell> <Text>{player.time}</Text></DataTable.Cell>
                <DataTable.Cell> <Text>{player.points}</Text></DataTable.Cell>

            </DataTable.Row>
        ))
        }
        </View>
        <View>
            <Pressable onPress={() => clearScoreboard()}>
                <Text>Clear Scoreboard</Text>
            </Pressable>
        </View>
        <Footer/>
    </>
    )
};