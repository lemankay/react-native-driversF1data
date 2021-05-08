import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {UsersReducer} from './components/UserReducer';
import {SearchReducer} from './components/SearchReducer';
import NewCounter1 from './components/Drivers';
import NewCounter2 from './components/SeasonList';
import DetailsSearch from './components/DetailsSearch';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchSeasonReducer } from './components/SearchSeasonReducer';
import F1data from './components/F1data';
import { Button,Image, View, Text, StyleSheet,Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import NewCounter3 from './components/F1Game';
import { SeasonReducer } from './components/SeasonReducer';
import NewCounter4 from './components/CurrentSeason';
import NewCounter5 from './components/CurrentResults';
const win = Dimensions.get('window');
//const h = win.height;
const W = win.width;
const BLUE = '#30d0fe';
const WHITE = '#fff';
function LogoTitle() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center' }}>

   <ImageBackground 
              style={{  width: 320, height: 60}}
          source={require('./img/logotip.png')}
         >  
          <Text style={{fontSize:20,color:'#78c068'}}>F1LEMAN</Text>
   </ImageBackground> 
    </View> 
  );
}
function LogoDrivers() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground 
              style={{  width: 220, height: 50}}
          source={require('./img/logotip.png')}
         >  
          <Text style={{fontSize:15,color:'#78c068'}}>F1LEMAN</Text>
        
   </ImageBackground> 
    </View>
  
  );
}
const Stack = createStackNavigator();

function AppTwo() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="F1data" component={F1data}
        
            options={{
              headerStyle:  {backgroundColor: '#000000b3'},
              headerTitle: props => <LogoTitle {...props} />,
            }}
            />
        <Stack.Screen name="CurrentSeason" component={NewCounter4}  
              options={{  
                headerStyle:  {backgroundColor: '#000000b3'},   
                headerTitle: props => <LogoDrivers {...props} />,
                headerRight: () => {
                  return(
                  <View style={{width:50,height:60}}>
                    <Text  style={{color:'#78c068'}}>Current Season</Text>
                    </View>
                 )
                  }
              }}
         />
           <Stack.Screen name="CurrentResults" component={NewCounter5}  
              options={{  
                headerStyle:  {backgroundColor: '#000000b3'},   
                headerTitle: props => <LogoDrivers {...props} />,
                headerRight: () => {
                  return(
                  <View style={{width:50,height:60}}>
                    <Text  style={{color:'#78c068'}}>Current Results</Text>
                    </View>
                 )
                  }
              }}
         />
        <Stack.Screen name="Drivers" component={NewCounter1}  
           options={{    
          headerStyle:  {backgroundColor: '#000000b3'},
          headerTitle: props => <LogoDrivers {...props} />,
          headerRight: () => {
            return(
                 <View style={{width:50,height:60}}>
              <Text style={{color:'#78c068'}}>Drivers</Text>
          </View>
            )
         
          },
        }}
        />
         <Stack.Screen name="SeasonList" component={NewCounter2}  
              options={{  
                headerStyle:  {backgroundColor: '#000000b3'},   
                headerTitle: props => <LogoDrivers {...props} />,
                headerRight: () => {
                  return(
                  <View style={{width:50,height:60}}>
                    <Text  style={{color:'#78c068'}}>Season List</Text>
                    </View>
                 )
                  }
              }}
         />
     
        <Stack.Screen name="F1Game" component={NewCounter3}options={{title: 'F1Game', headerStyle: {backgroundColor: '#40a01'}}}/> 
      
        <Stack.Screen name="Details" component={DetailsSearch}options={{title: 'Details', headerStyle: {backgroundColor: '#40a01'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//**************************APP-STORE*********************************** */
const reducers = combineReducers({
  users: UsersReducer,
  search: SearchReducer,
  season: SeasonReducer,
  seasonSearch: SearchSeasonReducer,
});
const store = createStore(
  reducers,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default function App() {
  return (
    <Provider store={store}>
      <AppTwo />
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 2,
    backgroundColor: '#30d0fe',
    //   position: 'relative',
  },
  card: {
  //  width: W - 250,
    height: 100,
    padding: 20,
    margin: 10,
    borderColor: '#ff7a00',
    borderWidth: 2,
    borderRadius: 10,
    //  backgroundColor: '#f3ea68',
  },
  header: {
    fontSize: 40,
    padding: 10,
  },
  image: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
    width: 150,
    height:150,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#000',
  },
  id: {
    fontSize: 30,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  sub: {
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
   // width: W - 35,
    height: 60,
    borderRadius: 20,
    position: 'relative',
    backgroundColor: '#30d0fe',
  },

  inputStyle: {
    fontSize: 22,
  //  width: W - 90,
    height: 55,
    marginLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
  },
  iconLeftStyle: {
    paddingTop: 4,
    fontSize: 30,
  },
  rightIconStyle: {
    paddingTop: 4,
    fontSize: 30,
    marginRight: 3,
  },

  cursorPointer: {
    marginTop: 10,
  },
  selectedPage: {
    fontWeight: 'bold',
    fontSize: 25,
  },
   /***************************************/
  cont: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    padding: 10,
    marginBottom: 150,
  },
 
  containerPagination: {
   // width: W / 5,

    paddingVertical: 10,
    // backgroundColor:'red'
  },
  subPagination: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: '#ffffff7a',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
  },
  h1: {
    paddingTop: 5,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cover: {
   // width: W / 4,
   // height: W * 0.2,
    borderRadius: 10,
  },
  /***************************************************** */
  centeredView: {
  flexDirection: 'row',
  flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexShrink: 2,
    alignItems: 'center',
    marginTop: 0,
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000000cc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width: 100,
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    margin: 25,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});
