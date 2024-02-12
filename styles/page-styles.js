import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap',
    
    
  },

  mainArea:{
    flexDirection:'column'
  },

  logoContainer:{
    top: 2,
    left:0,
    right:0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  timPicture:{
    justifyContent: 'center',
    alignItems: 'center',
    width: Constants.YR * 5,
    height: Constants.YR * 5,
    marginLeft: Constants.XR * 100
  },

  stephenPicture:{
    width: Constants.YR * 5,
    height: Constants.YR * 5,
    marginLeft: Constants.XR * 280

  },

  buttonContainer:{
  
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    top: Constants.YR * 300,
  },

  
  button:{
    width: Constants.YR * 250,
    height: Constants.YR * 40,
    backgroundColor: '#ff1a1a',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText:{
    fontSize: 17,
    color: 'white'
  },

  modalBackground:{
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContainer:{
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius:20,
    elevation: 20
  },

  modalHeader: {
    width: '100%',
    height: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  topPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Constants.YR * 250,
    flexDirection: 'column'
},
statsContainer: {
    width: Constants.MAX_WIDTH,
    height: Constants.YR * 120,
    flexDirection: 'row'
},
stats: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
pauseButton: {
    width: Constants.YR * 50,
    height: Constants.YR * 50,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
},
pauseIcon: {
    width: Constants.YR * 25,
    height: Constants.YR * 25,
},
levelContainer: {
    width: Constants.YR * 80,
    height: Constants.YR * 80,
    backgroundColor: '#ff1a1a',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
},
levelTitle: {
    fontSize: 21,
    color: 'white'
},
levelNumber: {
    fontSize: 17,
    color: 'white'
},
scoreIcon: {
    position: 'absolute',
    left: 0,
    width: Constants.YR * 40,
    height: Constants.YR * 40
},
scoreBar: {
    height: Constants.YR * 50,
    position: 'absolute',
    left: 20,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
},
scoreNumber: {
    fontSize: 17,
    color: 'black',
},
timeIcon: {
    position: 'absolute',
    left: 0,
    width: Constants.YR * 40,
    height: Constants.YR * 40,
},
timeBar: {
    height: Constants.YR * 50,
    position: 'absolute',
    left: 20,
    right: 5,
    backgroundColor: 'white',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center'
},
timeNumber: {
    fontSize: 17,
    color: 'black'
},
healthBarContainer: {
    height: Constants.YR * 40,
    width: Constants.MAX_WIDTH - Constants.XR * 120,
    marginLeft: Constants.XR * 60
},
healthIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Constants.YR * 46,
    height: Constants.YR * 40,
},
healthBar: {
    height: Constants.YR * 20,
    width: Constants.MAX_WIDTH - Constants.XR * 100 - Constants.XR * 60,
    marginLeft: Constants.XR * 40,
    marginTop: Constants.YR * 10,
    backgroundColor: 'white',
    borderRadius: Constants.YR * 10
},
healthBarInner: {
    position: 'absolute',
    backgroundColor: '#ff1a1a',
    left: Constants.XR * 3,

    top: Constants.YR * 3,
    bottom: Constants.YR * 3,
    borderRadius: Constants.YR * 8
},

  item:{
    fontSize:25,
    width: 120,
    height: 120,
    backgroundColor: 'blue',
    margin: 5,
    padding: 5,
    textAlign: 'center',
    textAlignVertical:'center', 
  },
  playArea: {
    width: Constants.MAX_WIDTH,
    marginTop: Constants.YR * 250,
    height: Constants.MAX_HEIGHT - Constants.YR * 250 - Constants.YR * 112,
    flexDirection: 'column',
  },

  playRow: {
    height: (Constants.MAX_HEIGHT - Constants.YR * 250 - Constants.YR * 112) / 4,
    width: Constants.MAX_WIDTH,
    flexDirection: 'row',
  },

  backgroundImage: {
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
    position: 'absolute'
  },

  playCell: {
      width: Constants.MAX_WIDTH / 3,
      height: (Constants.MAX_HEIGHT - Constants.YR * 250 - Constants.YR * 112) / 4,
      alignItems: 'center'
  }
  
  });

  export default styles;