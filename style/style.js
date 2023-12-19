
import { StyleSheet } from 'react-native';




 const style = StyleSheet.create({

  
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    
    
    
    
   
  },
  infoLogo: {
    alignItems:'center',
    flexDirection:'row'
  },
  texts : {
    fontSize: 13,
    padding:10,
    fontFamily:'RubikBubbles',


  },
  textInputs: {
    height: 50,
    width: 200,
    borderWidth: 5,
    borderColor:'pink',
    fontSize:40,
    color: 'green',
    fontFamily:'RubikBubbles',
    alignSelf:'center',
  },
  textsBig: {
    fontSize:20,
    color:'lightgreen',
    textAlign:'center',
    fontFamily:'RubikBubbles',
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: 'pink',
    flexDirection: 'row',
    
  },
  footer: {
    marginTop: 20,
    backgroundColor: 'pink',
    flexDirection: 'row'
  },
  title: {
   
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily:'RubikBubbles',
    
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily:'RubikBubbles',
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 50,
    flexDirection: "row",
    padding: 20,
    backgroundColor: "azure",
    width: 'auto',
    borderWidth:2,
    borderColor:'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20,
    fontWeight:'bold',
    fontFamily: 'RubikBubbles',
  }
});
export default style;


