
import { StyleSheet } from 'react-native';




 const style = StyleSheet.create({

  
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    
    
    
   
  },
  texts : {
    fontSize: 15,
    padding:10,


  },
  textInputs: {
    height: 50,
    width: 200,
    borderWidth: 5,
    borderColor:'pink',
    fontSize:40,
    color: 'green'
  },
  textsBig: {
    fontSize:20,
    color:'green',
    textAlign:'center',
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
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
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
    fontWeight:'bold'
  }
});
export default style;


