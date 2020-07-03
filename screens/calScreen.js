import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class calScreen extends Component {
  constructor() {
    super();
    this.state = {
        resultText:" ",
        calculationText:'',
    };
    this. oprations = ['DEL','+','-','*','/']
  }

  calculateResult(){
     const text = this.state.resultText
     console.log(text,eval(text))
     this.setState({
         calculationText:eval(text)
     })
     
     
     
  }

  validate(){
      const text = this.state.resultText
      switch(text.slice(-1)){
          case '+':
          case '-':
          case '*':
          case '/':
              return false
      }
      return true
  }

  buttonPressed(text){
      console.log(text);
      if(text == '='){
        return  this.validate() &&  this.calculateResult()
      }
      this.setState({
          resultText:this.state.resultText + text
      })
  }

  operate(operations){
      switch(operations){
          case 'DEL':
              console.log(this.setState.resultText)
              const text = this.state.resultText.split('')
              text.pop()
              this.setState({
                  resultText:text.join('')
              })
              break
          case '+':
          case '-':
          case '*':
          case '/':
              const lastChar = this.state.resultText.split('').pop()

              if(this.oprations.indexOf(lastChar)>0) return

              if(this.state.text == "") return
              this.setState({
                  resultText:this.state.resultText  + operations
              })

              
         
         
      }
  }

  render() {

    let rows = []
    let nums = [[7,8,9],[4,5,6],[1,2,3],[0,'.','=']]
      for(let i=0;i<4;i++){
          let row = []
          for(let j=0;j<3;j++){
             row.push(
                <TouchableOpacity 
                key={nums[i][j]}
                onPress={() => this.buttonPressed((nums[i][j]))}
                style={styles.btn}>
                <Text style={styles.btnText}>{nums[i][j]}</Text>
            </TouchableOpacity>
             )
          }
        rows.push(<View key ={i} style={styles.row}>{row}</View>)
      }

    
      let ops = []
      for (let i=0;i<5;i++){
          ops.push(
            <TouchableOpacity 
            key={this.oprations[i]}
            style={styles.btn}
             onPress={() => this.operate(this.oprations[i])}
            >
            <Text 
            style={[styles.btnText,styles.white]}>{this.oprations[i]}</Text>
        </TouchableOpacity>
          )
      }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
    <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
    <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
             {ops}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText:{
      fontSize:40,
      color:'black'
  },
  btnText:{
      fontSize:30,
      color:'white',

  },
  white:{
    color:'white'
  },
  btn:{
      flex:1,
      alignItems:'center',
      alignSelf:'stretch',
      justifyContent:'center',
     
  },
  calculationText:{
      fontSize:50,
      color:'black'
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  result: {
    flex: 2,
    backgroundColor: "white",
    justifyContent:'center',
    alignItems:'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: "white",
    justifyContent:'center',
    alignItems:'flex-end',
  },
  button: {
    flexGrow: 7,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    backgroundColor: "#434343",
   
  },
  operations: {
    flex: 1,
    justifyContent:'space-around',
    alignItems:'stretch',
    backgroundColor: "#636363",
  },
});

export default calScreen;
