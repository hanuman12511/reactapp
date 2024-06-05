import React from 'react'
import {Text,View,Image,StyleSheet,ScrollView,FlatList,TouchableOpacity} from 'react-native'
import {bike} from '../data'
interface Product{
    onPress:any
}

const  ProductComponent:React.FC<Product>=(props)=>{

    console.log("product ciomponennt prop[",props);

    const randeritem=(item:any)=>{
        
        console.log(item);
        let data = item.item
        console.log(data);
        return(
            <>
            <TouchableOpacity onPress={props.onPress}>
           <Image style={styles.img} source={data.img}/>
           <Text style={{fontSize:20,padding:10,color:'white',textAlign:'center'}}>{data.name}</Text>
           </TouchableOpacity>
            </>
        )
    }
    return(
        <>
       {/*  <ScrollView>
        <View style={styles.productmain}>
            {bike.map(value=>(
                <>
                <Image style={styles.img} source={value.img}/>
                </>
            ))}
        </View>
        </ScrollView> */}
        <FlatList
        data={bike}
        renderItem={randeritem}
        />


        </>
    )
}

export default ProductComponent;
const styles=StyleSheet.create({
    productmain:{
        flex:1,
        backgroundColor:'#fff'
    },
    img:{
        height:200,
        width:'100%'
    }

})