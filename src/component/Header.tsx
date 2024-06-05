import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'
export default function Header(){
    return(<>
  
    <View style={styles.top}>
        <View style={styles.headerbar}>
        <Image style={styles.imgmenu} source={require('../assets/icons/menu.png')}/>
       
        <Text style={styles.title}>
            Bike
        </Text>
        </View>
        <View style={styles.right}>
        <Image style={styles.imgmenu} source={require('../assets/icons/user.png')}/>
        <Image style={styles.imgmenu} source={require('../assets/icons/notification.png')}/>
        <Image style={styles.imgmenu} source={require('../assets/icons/cart.png')}/>
        </View>
        </View>
        
        </>
    )
}

const styles = StyleSheet.create({
 

    top:{
     
        flexDirection:'row',
        backgroundColor:'#fff',
        marginHorizontal:10,
        marginTop:10,
        borderRadius:20,
        paddingHorizontal:20,
        alignItems:'center'
    },
    headerbar:{
        flex:2,
        flexDirection:'row',
      
        alignItems:'center'
        
    },
    imgmenu:{
        width:30,height:30
    },
    title:{
        color:'gray',
        fontSize:30,
        marginLeft:10
    },
    right:{
        flex:1,
        flexDirection:'row'
    }
})