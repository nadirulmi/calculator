import React from 'react';
import {Text, View} from 'react-native';
//Styles
import {styles} from '../theme/appTheme';
//Components
import {ButtonCalc} from '../components/ButtonCalc';
//Hook
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
const {number,
  prevNumber,
  reset,
  buildNumber,
  positNegativ,
  btnDelete,
  divideBtn,
  multiplyBtn,
  additionBtn,
  subtractBtn,
  calculate,
  } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.smallResult}>{prevNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit> {/*Adjust text on a single line*/ }
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#F08080" action={reset} />
        <ButtonCalc text="+/-" color="#F08080" action={positNegativ} />
        <ButtonCalc text="del" color="#F08080" action={btnDelete} />
        <ButtonCalc text="/" color="#A3003C" action={divideBtn} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#A3003C" action={multiplyBtn} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="—" color="#A3003C" action={subtractBtn} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#A3003C" action={additionBtn} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" widthButton action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#A3003C" action={calculate} />
      </View>
    </View>
  );
};
