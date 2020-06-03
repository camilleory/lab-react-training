import React from 'react';
import IdCard from './IdCard';
import './App.css';
import Greetings from './Greetings'
import Random from './Random'
import BoxColor from './BoxColor'
import CreditCard from './CreditCard'


function App() {
  return (
    <div className="App">
      <IdCard lastName ="Doe" firstName ="John" gender="male" height={200} birth={new Date("1992-12-12")} picture ="https://randomuser.me/api/portraits/men/44.jpg"></IdCard>
      <IdCard lastName ="Ory" firstName ="Camille" gender="female" height={170} birth={new Date("1992-12-12")} picture ="https://www.xing.com/image/9_c_b_29d72d294_33480286_1/camille-ory-foto.1024x1024.jpg"></IdCard>
      <Greetings lang='fr' children ="Ludwig"></Greetings>
      <Greetings lang='en' children ="Monesa"></Greetings>
      <Random min = {1} max = {3}></Random>
      <Random min = {1} max = {100}></Random>
      <BoxColor r={200} g={100} b={40}></BoxColor>
      <BoxColor r={20} g={300} b={0}></BoxColor>
      <CreditCard type ='visa' number="**** **** **** 1234" expirationMonth={1} expirationYear={2019} bank="N26" owner="Mir Numbing"color='blue'></CreditCard>
      <CreditCard type ='MasterCard' number="**** **** **** 7900" expirationMonth={9} expirationYear={2023} bank="CreditSuisse" owner="Other Mir"color='black'></CreditCard>

    </div>
  );
}

export default App;
