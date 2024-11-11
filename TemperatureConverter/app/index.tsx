import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', padding: 30, alignItems: 'center'}}>
            <Text style={{fontSize: 20, margin: 20, fontWeight: 'bold'}}>Welcome</Text>
            <View style={{backgroundColor: 'red', padding: 10, margin: 15}}>
                <Link href='/temp' asChild>
                    <Pressable><Text>Temperature Converter</Text></Pressable>
                </Link>
            </View>
            <View style={{backgroundColor: 'cyan', padding: 10, margin: 15}}>
                <Link href='/rps' asChild>
                    <Pressable><Text>RPS</Text></Pressable>
                </Link>
            </View>
        </SafeAreaView>
    )
}