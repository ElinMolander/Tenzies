import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import Die from './Die'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'
import ice from './assets/ice.jpg'


function App() {
  const [dice, setDice] = useState(allNewdice())
  const [tenzies,setTenzies] = useState(false)
  const [counter, setCounter] = useState(0)
  
  function allNewdice(){
    const newDice = []
    for(let i = 0; i < 10; i++){
      newDice.push(
        {
          value: Math.ceil(Math.random() * 6),
          isHeld:false,
          id:nanoid()
        })
    }
    return newDice
  }

  useEffect(()=>{
    const isEverHeld = dice.every((die)=> die.isHeld)
    const refNum = dice[0].value
    const everyNumber = dice.every((die)=> die.value === refNum)
    if (isEverHeld && everyNumber){
      setTenzies(true)
    }
  },[dice])

  const placeNewDice = dice.map((die)=>{
      return <Die value={die.value} isHeld={die.isHeld} key={die.id} holdDice={()=> holdDice(die.id)}/>
    })

  function createNewDie(){
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld:false,
        id:nanoid()
      }
  }

  function rollDice(){
    setCounter(counter => counter + 1)
    if(tenzies){
      setDice(allNewdice())
      setTenzies(false)
      setCounter(0)
    }
      setDice(prevDice => prevDice.map(die =>{
      return die.isHeld ? die : createNewDie()
    }))
    console.log(counter)
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die =>{
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const styleBackgroundImage = { backgroundImage: `url(${ice})` }

  const styleBackgroundcolor= {
    backgroundColor: tenzies? "#2EA2AB": "white",
    color: !tenzies? "#2EA2AB": "white",
  }

    return (
      <main className="main" style={styleBackgroundImage}>
        {tenzies && <Confetti colors={["#FFF","#FFF"]}/>}
        <div className='text-wraper'>
          <h1>Tenzies</h1>
          {tenzies? <p><span>You won!!!</span><br></br> It took you <span> {counter} </span> rolls.<br></br>Can you beat that?</p>:
           <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> }
        </div>
         
        <div className='dice-wraper'>
          {placeNewDice }
          
        </div>
        <button onClick={ rollDice } style={tenzies? styleBackgroundcolor: styleBackgroundcolor}>{tenzies? "New game": "Roll"}</button>
     </main>
  )
}

export default App
