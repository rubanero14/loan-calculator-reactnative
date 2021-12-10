import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground,TouchableOpacity } from 'react-native';

export default function App() {
  const image = { uri: "https://tipsmake.com/data/images/100-most-beautiful-background-picture-14-oY2wQsrzD.jpg" };
  const [downPayment, setDownPayment] = useState('');
  const [housePrice, setHousePrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [installment, setInstallment] = useState('');
  const calculateLoan = () => {
      let downpayment = ((downPayment/100) * housePrice)
      let amountBorrow = housePrice - downpayment
      let totalInterest = (((interestRate/100)*amountBorrow)*loanTenure)
      let totalMonth = loanTenure*12
      let installment = ((amountBorrow + totalInterest)/totalMonth).toFixed(2)
      if(installment>0){
        setInstallment('Your monthly installment is '+installment)
      } else {
        installment = 0
        setInstallment('Your monthly installment is '+installment)
      };
  }
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Home Loan Calculator</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>{setHousePrice(text)}}
          value={housePrice}
          placeholder="Enter Home Price"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>{setDownPayment(text)}}
          value={downPayment}
          placeholder="Enter Downpayment (%)"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>{setInterestRate(text)}}
          value={interestRate}
          placeholder="Enter Interest Rate (%)"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>{setLoanTenure(text)}}
          value={loanTenure}
          placeholder="Enter Loan Tenure"
        />
        <Text style={styles.headerText1}>{installment}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={calculateLoan}
        >
          <Text style={styles.buttonText}>Calculate Loan</Text>
        </TouchableOpacity> 
        {/* <ImageBackground source={null} resizeMode="cover" style={styles.image}>
      </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: 'center',
    textAlign: 'center'
  },
  headerText: {
    color: '#003479',
    margin: 10,
    fontSize: 32,
  },
  headerText1: {
    color: '#003479',
    margin: 10,
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center'
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    borderColor: 'black',
    borderRadius: 5,
    textAlign: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#003479",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  }
});
