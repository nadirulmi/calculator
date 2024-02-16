import React, {useState, useRef} from 'react';

enum Operators {
    add,
    subtract,
    multiply,
    divide,
}

export const useCalculator = () =>{
    const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const reset = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    //no aceptar doble punto
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);
        //evaluate if there are more "0" after the dot
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
        //evaluate if it's different from "0" and doesn't have a dot
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
        //avoid 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positNegativ = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    if (number !== '0') {
      setNumber(number.slice(0, -1));
    }

    if (number.length == 1) setNumber('0');
  };

  const changePrevNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideBtn = () => {
    changePrevNumber();
    lastOperation.current = Operators.divide;
  };

  const multiplyBtn = () => {
    changePrevNumber();
    lastOperation.current = Operators.multiply;
  };

  const subtractBtn = () => {
    changePrevNumber();
    lastOperation.current = Operators.subtract;
  };

  const additionBtn = () => {
    changePrevNumber();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        if (num1 && num2 !== 0) {
          setNumber(`${num2 / num1}`);
        }
        break;
    }
    setPrevNumber('0');
  };


  return{
    number,
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
  }
}