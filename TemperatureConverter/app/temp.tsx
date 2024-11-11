import { SafeAreaView, Text, TextInput, View } from "react-native";
import { useState } from "react";


export default function TemperatureConv() {
    const [celsius, setCelsius] = useState(0);

    const toFarenheit = (celsius: number) => {
        return (celsius * 9/5) + 32;
    } 
    
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', padding: 30, alignItems: 'center'}}>
            <Text style={{fontSize: 20, margin: 20, fontWeight: 'bold'}}>Temperature Converter</Text>
            <View>
                <Text>Write in Celsius:</Text>
                <TextInput keyboardType="numeric" onChangeText={text => setCelsius(Number(text))} value={String(celsius)}/>
                <Text>Farenheit: {toFarenheit(celsius)}</Text>
            </View>
        </SafeAreaView>
    )
}