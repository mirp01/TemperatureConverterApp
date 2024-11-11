import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

type Choice = 'rock' | 'paper' | 'scissors';
type Result = 'win' | 'lose' | 'tie';

export default function RPS() {
    const [result, setResult] = useState<string>('');
    const [computerChoice, setComputerChoice] = useState<Choice | ''>('');

    const getComputerChoice = (): Choice => {
        const choices: Choice[] = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    };

    const getResult = (playerChoice: Choice, computerChoice: Choice): Result => {
        if (playerChoice === computerChoice) return 'tie';
        
        if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
        return 'win';
        }
        
        return 'lose';
    };

    const play = (playerChoice: Choice) => {
        const computer = getComputerChoice();
        setComputerChoice(computer);
        
        const outcome = getResult(playerChoice, computer);
        setResult(`You ${outcome}! won by ${computer}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Rock Paper Scissors</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => play('rock')}
                    >
                    <Text style={styles.buttonText}>Rock</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => play('paper')}
                    >
                    <Text style={styles.buttonText}>Paper</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => play('scissors')}
                    >
                    <Text style={styles.buttonText}>Scissors</Text>
                </TouchableOpacity>
            </View>
            {result && <Text>{result}</Text>}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        flex: 1, 
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'cyan',
        padding: 10,
        borderRadius: 5,
        minWidth: 80,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
    }
});