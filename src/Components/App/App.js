import Title from '../Title/title.js';
import Header from '../Header/header.js';
import './App.css';
import React, { useState, useEffect } from "react";
import express  from 'express';
import cors from "cors";


app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);






function App() {
  const API_URL = `https://superheroapi.com/api/10166230989275387/1`;

  const [hero, setHero] = useState([]);

  useEffect(()=>{
    loadData();
  },[]);

  const loadData = async() =>{
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(response.headers)
    setHero(data)
    console.log(data)
  }





  return (
    <div>
    <div>
      <Title/>
    </div>
      <Header/>
    </div>
  );
}

export default App;
