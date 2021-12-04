import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Form = ({ navigation }) => {
    const [OriPrice, setOriPrice] = useState(0)
    const [DiscPrice, setDiscPrice] = useState(0)
    const [saved, setSaved] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)
    const [disable,setDisable] = useState(true)
    const [prev, setPrev] = useState([
        
    ])

    const changeVal = (e) => {  //Input validation for original price and also making save button enabled after val change
        setDisable(false)
        
        let regex = /^\d*[1-9]\d*$/
        
        regex.test(e) ? setOriPrice(e) : alert('Please Enter A Positive Integer')
        
    }
    const changeVal2 = (e) => {//Input validation for discount percentage and also making save button enabled after val change
        setDisable(false)
        e > 100 ? alert('Discount cannot be higher than 100') : setDiscPrice(e)
        
    }
    //Calculate final price
    const calculate = () => { 
        let finalP = OriPrice - (OriPrice * (DiscPrice / 100))
        setFinalPrice(finalP)
        let savedCost = OriPrice - finalP
        setSaved(savedCost)
        
    }
    //Save to history
    const save = (newTask) => {
        setDisable(true)
        setPrev([...prev,newTask ])
        
        console.log(prev)
    }

    //Input Form And Navigation To History Screen
    return (
        
        <View style={styles.container}>

            <Button style={{marginRight:0}} title="Check History" onPress={() => navigation.navigate('History', {data: prev})} />
            
            <Text style={styles.header}>Discount App</Text>
            <TextInput style={styles.TextInput}
            
                placeholder="Original Price"
                onChangeText={changeVal}>

            </TextInput>
            <TextInput style={styles.TextInput}
                placeholder="Discount %"
                onChangeText={changeVal2}>

            </TextInput>

            <Text style={{fontSize:16}}>You Save: {saved.toFixed(2)}</Text>
            <Text style={{fontSize:16}}>Final Price: {finalPrice.toFixed(2)}</Text>

            <Button onPress={() => calculate()} title="Calculate" />

            <Button style={styles.button} disabled = {disable} onPress={() => save({OriPrice,DiscPrice,finalPrice})} title='Save' />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // position:'relative',
        alignItems: 'center',
        justifyContent:'center',
        padding: 10

    },
    TextInput: {
        color: 'orange',
        borderWidth: 2,
        margin: 15,
        padding: 10,
        height: 40,
        borderColor: 'black'
    },
    header: {
        padding: 10,
        margin: 15,
        height: 40,
        fontWeight:'bold',
        fontSize:24
        
    },
    button: {
        marginVertical: 10
    }
})

export default Form