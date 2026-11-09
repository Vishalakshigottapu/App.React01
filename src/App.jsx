import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import {useState} from 'react'
import { useEffect } from 'react'

function App() {
  let [count,setCount]=useState(0)
  let [val,setVal]=useState(0)
  //useEffect(()=>{
      //console.log('api running')
    //})
    //useEffect(()=>{
      //console.log('api logic')
      //})
      useEffect(()=>{
      console.log('api logic')
      },[val])
  const [doctors, setDoctors] = useState([
    { name: "Harshini", age: "25", specialization: "Cardiologist", gender: "Female" },
    { name: "Sumanth", age: "30", specialization: "Neurologist", gender: "Male" },
    { name: "Priya", age: "28", specialization: "Pediatrician", gender: "Female" },
    { name: "Rajesh", age: "35", specialization: "Orthopedic", gender: "Male" },
    { name: "Anita", age: "26", specialization: "Dermatologist", gender: "Female" },
    { name: "Vikram", age: "32", specialization: "Psychiatrist", gender: "Male" }
  ]);
  
  return (
    <div>
      <button onClick={()=>setVal(val+1)}>inc val</button>
      {count}
      <button onClick={()=>{
        setCount(count+1)
        console.log(count)
      }}>inc</button>
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
        <Doctorcard name="Harshini" age="25" specialization="Cardiologist" gender="Female"/>
        <Doctorcard name="Sumanth" age="30" specialization="Neurologist" gender="Male"/>
        <Doctorcard name="Priya" age="28" specialization="Pediatrician" gender="Female"/>
        <Doctorcard name="Rajesh" age="35" specialization="Orthopedic" gender="Male"/>
        <Doctorcard name="Anita" age="26" specialization="Dermatologist" gender="Female"/>
        <Doctorcard name="Vikram" age="32" specialization="Psychiatrist" gender="Male"/>

      </div>
      <Addnewdoctor/>
      
    </div>
   
  )
}

export default App