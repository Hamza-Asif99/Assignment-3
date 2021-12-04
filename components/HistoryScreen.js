import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


function HistoryScreen({ route, navigation }) {
    const { data } = route.params
    const [dataDel,setDataDel] = useState(false) // State used to simply refresh the history once item removed to give
                                                //show changed history

    const delRow=(index)=>{
        data.splice(index,1)
        setDataDel(!dataDel)
    }
    
    const clearHistory=()=>{

        // console.log('check')
        data.length = 0
        setDataDel(!dataDel)
    }
    

    return (

        
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {data.length === 0 ? <Text  style={{ fontSize: 24, fontWeight: 'bold' }}>Nothing Saved</Text> : 
            
                <><Text style={{ fontSize: 24, fontWeight: 'bold' }}>History Screen</Text><Button title="Clear History" onPress={() => { clearHistory() } } /></>
            }

                <View style={styles.thead}>
                    <Text style={{ padding: 10, magin: 10 ,fontSize:16,fontWeight:'bold'}}>Original Price</Text>
                    <Text style={{ padding: 10, magin: 10 ,fontSize:16,fontWeight:'bold'}}> - </Text>
                    <Text style={{ padding: 10, magin: 10 ,fontSize:16,fontWeight:'bold'}}>Discount</Text>
                    <Text style={{ padding: 10, magin: 10 ,fontSize:16,fontWeight:'bold'}}>= </Text>
                    <Text style={{ padding: 10, magin: 10 ,fontSize:16,fontWeight:'bold'}}>Final Price</Text>
                    <Text style={{ padding: 10, magin: 10 ,fontSize:16,fontWeight:'bold'}}>| Remove</Text>
                </View>
            {data.map((ele, index) => (
                <View style={styles.thead}>

                    <Text style={{ margin: 15, padding: 15 }}
                        key={index}> {(ele.OriPrice)}
                    </Text>

                    <Text style={{ margin: 15, padding: 15 }}
                        key={index}> -
                    </Text>
                    
                    <Text style={{ margin: 15, padding: 15 }}
                        key={index}> {(ele.DiscPrice)}
                    </Text>

                    <Text style={{ margin: 15, padding: 15 }}
                        key={index}> =
                    </Text>
                    <Text style={{ margin: 15, padding: 15 }}
                        key={index}> {(ele.finalPrice)}
                    </Text>
                    <Button title= "Remove" onPress = {()=>delRow(index)}/>

                </View>


            ))}

                <Button title="Back To Form" onPress={() => navigation.navigate('Form')} />
            
        </View>
    );
}
const styles = StyleSheet.create({
    thead: {
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'

    }
})
export default HistoryScreen