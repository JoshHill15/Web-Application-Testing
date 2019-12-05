import React, { useState } from "react"
import Dashboard from './Dashboard';

function Display() {
    const [balls, setBalls] = useState(0)
    const [strikes, setStrikes] = useState(0)
    const [fouls, setFouls] = useState(0)
    const [hits, setHits] = useState(0)

    function hit (){
        setHits(hits + 1)
        if (hits >= 0){
            setBalls(0)
            setStrikes(0)
        } 
        if (hits === 1) setHits(0)
    }

    function foul (){
        if (strikes > 1){
            setStrikes(2)
        } else {
            setStrikes(strikes + 1)
        }
    }

    function strike (){
        if (strikes < 2){
            setStrikes(strikes + 1)
        } else {
            setStrikes(0)
        }

    }

    function ball (){
        if (balls < 3){
            setBalls(balls + 1)
        } else {
            setBalls(0)
        }
    }
    return (
      <div>
          <p>Balls: {balls}</p>
          <p>Strikes: {strikes}</p>
          <p>Fouls: {fouls}</p>
          <p>Hits: {hits}</p>
          <Dashboard 
          strike = {strike}
          ball = {ball}
          foul = {foul}
          hit = {hit}/>
      </div>
    );
  }
  
  export default Display