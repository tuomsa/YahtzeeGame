import { useState } from "react";
import { TextInput, Text, View, Pressable,Keyboard } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from "./Header";
import Footer from "./Footer";
import style from "../style/style.js";
import { NBR_OF_DICES,NBR_OF_THROWS,MIN_SPOT,MAX_SPOT,BONUS_POINTS_LIMIT,BONUS_POINTS } from "../constants/Game";




export default Home = ({navigation}) => {
    const [playerName,setPlayerName] = useState('');
    const [hasPlayerName,setHasPlayerName] = useState(false);

    const handlePlayerName = (value) => {
        if (value.trim().length > 0) {
            setHasPlayerName(true);
            Keyboard.dismiss;
        }
    }
    return(
        <>
        <Header/>
        <View>
            <View style={style.infoLogo}>
            <MaterialCommunityIcons
            name='information-variant'
            size = {150}
            color='pink'
            />
            <MaterialCommunityIcons
            name='information-variant'
            size = {150}
            color='pink'
            />
            <MaterialCommunityIcons
            name='information-variant'
            size = {150}
            color='pink'
            />
            </View>
            {!hasPlayerName ?
            <>
            <Text style={style.textsBig}> Enter name for scoreboard:</Text>
            <TextInput style={style.textInputs} onChangeText={setPlayerName} autoFocus={true}/>
            <Pressable  style={style.button} onPress={() => handlePlayerName(playerName)}> 
            <Text style={style.buttonText} > LETS GO!</Text>
            </Pressable>
             </>
             :
             <>
             <Text style={style.textsBig}> Game Rules: </Text>
             <Text multiline ={true} style={style.texts} > Rules of the game
THE GAME: Upper section of the classic Yahtzee 
dice game. You have {NBR_OF_DICES} dices and 
for the every dice you have {NBR_OF_THROWS} throws. After each throw you can keep dices in 
order to get same dice spot counts as many as 
possible. In the end of the turn you must select 
your points from {MIN_SPOT} to {MAX_SPOT}. 
</Text>
<Text style={style.texts} >
Game ends when all points have been selected. 
The order for selecting those is free.
POINTS: After each turn game calculates the sum 
for the dices you selected. Only the dices having 
the same spot count are calculated. Inside the 
game you can not select same points from {MIN_SPOT} to {MAX_SPOT} again.</Text> 
<Text style={style.texts} >
GOAL: To get points as much as possible. {BONUS_POINTS_LIMIT} points is the limit of 
getting bonus which gives you {BONUS_POINTS} points more.</Text>
             <Text style={style.textsBig} > Have fun, {playerName} !! </Text>
             <Pressable  style={style.button} onPress={() => navigation.navigate('Gameboard', {player: playerName})}>
                <Text style={style.buttonText}>PLAY</Text>
             </Pressable>
            </>
            }
        </View>
        <Footer/>
        </>
        )


}