import { useEffect, useState } from 'react';
import { Text, View,Pressable } from 'react-native';
import Header from "./Header";
import Footer from "./Footer";
import style from '../style/style.js';
import { NBR_OF_DICES,NBR_OF_THROWS,MIN_SPOT,MAX_SPOT,BONUS_POINTS_LIMIT,BONUS_POINTS } from "../constants/Game";
import { Container, Row, Col } from 'react-native-flex-grid';
import MaterialCommynityIcons from '@expo/vector-icons/MaterialCommunityIcons';

let board = [];

export default Gameboard =({navigation , route}) =>{

    const [playerName, setPlayerName] = useState('');
    const [nbrOfThrowsLeft,setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status,setStatus] = useState('Throw dices');
    const [gameEndStatus,setgameEndStatus] = useState(false);
    //Nopat kiinnitetty?
    const [selectedDices,setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    //Noppien silmäluvut?
    const [diceSpots,setDiceSpots] = useState(new Array(NBR_OF_DICES).fill(0));
    //Onko silmäluvuille pisteet?
    const [selectedDicePoints,setSelectedDicePoints] = useState(new Array(MAX_SPOT).fill(false));
    //Kerätyt pisteet?
    const [dicePointsTotal,setDicePointsTotal] = useState(new Array(MAX_SPOT).fill(0));

    useEffect(() => {
        if (playerName === '' && route.params?.player) {
            setPlayerName(route.params.player);
        }
    },[]);

    const dicesRow = [];
    for (let dice = 0; dice < NBR_OF_DICES; dice++ ) {
        dicesRow.push(
            <Col key ={"dice" +dice }>
                <Pressable
                 key ={"dice" +dice}
                  onPress={() => selectDice(dice)}>
                    <MaterialCommynityIcons
                    name={board[dice]}
                    key={"dice" +dice}
                    size={50}
                    color={getDiceColor(dice)}
                    ></MaterialCommynityIcons>

                  </Pressable>
            </Col>
        )
    }

    const pointsRow = [];
    for (let spot = 0; spot < MAX_SPOT; spot++ ) {
        pointsRow.push(
            <Col key ={"pointsRow" +spot }>
            <Text
            key ={"pointsRow" +spot }>
                {getSpotTotal(spot)}
            </Text>

            </Col>
        )
    }

    const pointsToSelectRow = [];
    for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++ ) {
        pointsToSelectRow.push(
            <Col key ={"buttonsRow" +diceButton }>
                <Pressable
                 key ={"buttonsRow" +diceButton}
                  onPress={() => selectDicePoints(diceButton)}
                >   
                    <MaterialCommynityIcons
                    name={"numeric-" + (diceButton + 1) + "-circle"}
                    key={"buttonsRow" + diceButton}
                    size={35}
                    color={getDicePointsColor(diceButton)}
                    ></MaterialCommynityIcons>

                  </Pressable>
            </Col>
        );
    }

    const selectDicePoints = (i) => {
        if(nbrOfThrowsLeft === 0) {
        let selectedPoints = [...selectedDicePoints];
        let points = [...dicePointsTotal];
        if (!selectedPoints) {
        selectedPoints[i] = true;
        let nbrOfDices = diceSpots.reduce((total, x) => (x === (i + 1) ? total + 1: total),0);
        points [i] = nbrOfDices * (i + 1);
        }
        else {
            setStatus('Already selected points for' + (i + 1));
            return points[i];
        }
        setDicePointsTotal(points);
        setSelectedDicePoints(selectedPoints);
        return points[i];
        }
        else {
            setStatus('Throw' + NBR_OF_THROWS + ' times before setting points');
        }}


    const throwDices = () => {
        if(nbrOfThrowsLeft === 0 && !gameEndStatus){
            setStatus('Select your points before next throw');
            return 1;
        }
        else if(nbrOfThrowsLeft === 0 && gameEndStatus) {
            setgameEndStatus(false);
            diceSpots.fill(0);
            dicePointsTotal.fill(0);
        }
        let spots = [...diceSpots];
        for (let i = 0;  i < NBR_OF_DICES; i++ ){
            if(!selectedDices[i]){
                let randomNumber = Math.floor(Math.random() * 6 + 1);
                board[i] = 'dice-' + randomNumber;
                spots[i] = randomNumber;
            }
            }
            setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
            setDiceSpots(spots);
            setStatus('Select and throw again');

        }
    

    function getSpotTotal(i){
        return dicePointsTotal[i];
    }

    const selectDice = (i) => {
        if(nbrOfThrowsLeft < NBR_OF_THROWS && !gameEndStatus ) {
            let dices = [...selectedDices];
            dices[i] = selectedDices[i] ? false : true;
            setSelectedDices(dices);
        }
        else
        setStatus('Throw Dices First Please.');
    }

    function getDiceColor(i) {
        return selectedDices[i] ? 'black' : 'pink';
    }

    function getDicePointsColor(i) {
        return selectedDicePoints[i] && !gameEndStatus ? 'black' : 'pink';

    }


    return (
        <>
<Header/>
<View>
    <Text>GAMEBOARDHERES</Text>
    <Container fluid>
        <Row>{dicesRow}</Row>
    </Container>
    <Text>Throws left: {nbrOfThrowsLeft}</Text>
    <Text>{status}</Text>
    <Pressable onPress={()=>throwDices()}>
        <Text>THROWS YOURE DICES</Text>
    </Pressable>
    <Container fluid>
        <Row>{pointsRow}</Row>
    </Container>
    <Container fluid>
        <Row>{pointsToSelectRow}</Row>
    </Container>
    <Text> Player: {playerName}</Text>
</View>
<Footer/>
</>
    )
     } 