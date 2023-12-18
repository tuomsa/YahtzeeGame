const throwDices = () => {
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
