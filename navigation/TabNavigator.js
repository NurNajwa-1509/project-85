import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator 
        labeled={false}
        barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === 'Feed') {
                        iconName = focused 
                            ? 'book'
                            : 'book-outline';
                    } else if(route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline'
                    }
                    return( <Ionicons 
                    name={iconName} 
                    size={RFValue(25)} 
                    color={color}
                    style={styles.icons} 
                    />
                    );
                }
            })}
            activeColor={"#ee8249"}
            inactiveColor={"gray"}
        >
            <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
      <Tab.Screen name="Create Post" component={CreatePost} options={{headerShown:false}}/>
    </Tab.Navigator>    
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    droidSafeArea:{
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight:RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:'row'
    },
    appIcon:{
        flex:0.2,
        justifyContent:'center',
        alignItems:'cemter'
    },
    iconImage:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    appTitleTextContainer:{
        flex:0.8,
        justifyContent:'center'
    },
    appTitleText:{
        color:'white',
        fontSize:RFValue(28),
    },
    cardContainer:{
        flex:0.85
    }
});