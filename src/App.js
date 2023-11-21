/*
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Temp = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(10),
  backgroundColor: 'black',
  textAlign: 'center',
  color: 'red',
  margin: theme.spacing(1),
  minWidth: 120,
}));

export default function HorizontalScrollGrid() {
  const contentArray = ['https://th.bing.com/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  'https://th.bing.com/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  'https://th.bing.com/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  'https://th.bing.com/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  'https://th.bing.com/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  'https://th.bing.com/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
  ];

  return (
    <div style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
      <Box style={{ display: 'flex' }}>
        {contentArray.map((content, index) => (
          
           <Temp key={index}>  <img src={content} /></Temp>
        ))}
      </Box>
    </div>
  );
}
*/

/*
import React, {useState } from 'react';

function Myform(){
  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [number, setNumbers]=useState('');
  const [message,setMessage]=useState('');

return(
  <form>
    <label>
      Name:
      <input
      type="text"
      value={name}
      onChange={(a)=> setName(a.target.value)}
 />

    </label>
    <label>
      Email:
      <input
      type="text"
      value={email}
      onChange={(a)=> setEmail(a.target.value)}
      />
</label>
  <label>
    Message:
    <textarea
    type="text"
    value={message}
    onChange={(a)=> setMessage(a.target.value)}
    />
  </label>
  <label>
      Number:
      <input
      type="text"
      value={number}
      onChange={(a)=> setNumbers(a.target.value)}
      />
</label>
  </form>
);
}
export default Myform;
*/


/*
import React,{ useState } from 'react';
const Picker = () => {

  const [Ques1,setQues1] = useState('');
  const [Ques2,setQues2] = useState('');

  const Why =(a,setterFunction) => {
    const value = a.target.value;
     setterFunction(value === '10'?'10' :'-5');
    };

    return(
      <div>
        <h2>Which country has won the most world cup in football?</h2>
        <select value={Ques1} onChange={(a)=> Why(a,setQues1)}>
          <option value="">select an option</option>
          <option value="0">argentina</option>
          <option value="10">brazil</option>
          <option value="0">france</option>
          <option value="0">spain</option>
          <option value="0">india</option>
        </select>
        <h2>which country won last world cup</h2>
        <select value={Ques2} onChange={(a)=> Why(a,setQues2)}>
          <option value="">select an option</option>
          <option value="10">argentina</option>
          <option value="0">brazil</option>
          <option value="0">france</option>
          <option value="0">spain</option>
          <option value="0">india</option>
        </select>

        {
          (Ques1 && Ques2) && (
            <h2>
              Total Marks:{Number(Ques1)+ Number(Ques2)}
           </h2>
          )
}
    </div>
    );
};

   export default Picker;
*/


/*
import './App.css';
function math(){
  alert(Math.floor(Math.random()*1000))
}
function Rand(){
  alert(Math.floor(Math.random()*10000))
}
function name(){
  alert("Messi is the Goat")
}
function App() {
  return (
    <div classname="App">
    <header classname="App-header">
      <h1>REACT APP</h1>
    <a classname="anchor" href="https://www.w3schools.com/">W3 schools</a>
    <ul>
      <li><a href="https://www.w3schools.com/html/">HTML</a></li>
      <li><a href="https://www.w3schools.com/css/default.asp">CSS</a></li>
      <li><a href="https://www.w3schools.com/js/default.asp">JAVASCRIPT</a></li>
    </ul>
    <button onClick={math}>click here</button><br></br>
    <button onClick={Rand}>OTP</button><br></br>
    <button onClick={name}>message</button>
    </header>
    </div>
  );
}

export default App;
*/









/*
import React,{useState} from 'react';
import './App.css';


const Picker =()=>{
 

    const [Quiz1, setQuiz1]=useState(" ");
  const [Quiz2, setQuiz2]=useState(" ");
  const [Quiz3, setQuiz3]=useState(" ");

  const why =(a,setterFunction)=> {
    const value =a.target.value;
    setterFunction(value ==='10' ? '10':'-5');
  

} ;

return(
  
  <div>
   <fieldset>
    
      
    
    <h2> Who is the god of cricket?</h2>
    <select value={Quiz1 }onChange={(a)=> why(a,setQuiz1)}>
    <option value="">select an option</option>
    <option value="0">m.s.dhoni</option>
    <option value="0">virat kohli</option>
    <option value="10">Sachin</option>
    <option value="0">ricky ponting</option>
  
  
  
  
  </select>

  <h2> Who is the king of cricket?</h2>
    <select value={Quiz2 }onChange={(a)=> why(a,setQuiz2)}>
    <option value="">select an option</option>
    <option value="0">m.s.dhoni</option>
    <option value="0">maxwell</option>
    <option value="10">virat kohli</option>
    <option value="0">jadeja</option>
    </select>


    <h2> Which year india won the worldcup ? </h2>
    <select value={Quiz3 }onChange={(a)=> why(a,setQuiz3)}>
    <option value="">select an option</option>
    <option value="0">2007</option>
    <option value="10">2011</option>
    <option value="0">2015</option>
    <option value="0">2019</option>
    </select>
 
    {
      
      (Quiz1&& Quiz2&&Quiz3)&& (
        <p>
          Total Marks:{Number(Quiz1)+ Number(Quiz2)+Number(Quiz3)}
        </p>
 
        
      )
    }
    
    </fieldset>
 </div>
  
);
 
  };

  export default Picker;
*/



/*
  import React,{ useEffect, useState } from "react";
  import axios from "axios";
  


  const ApiClass = () => {
     const [justvar, setDivison] =useState('');
  
  useEffect(() => {

    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      const wow =response.data;

      const justvar =wow.setup;

      setDivison(justvar);
    }
      )
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
    }, []);

    return(
      <div>
        {justvar !== ' ' && (
          <div>
             <p> Division: {justvar}</p>
          </div>
        )}
          </div>
    );

  };

  export default ApiClass;
*/
  

/*

  import React, { useState } from 'react';
import './App.css';


const Picker=()=>{
  const [Ques1, setQues1] = useState(' ');
  const [Ques2, setQues2] = useState(' ');
  const [Ques3, setQues3] = useState(' ');

  const Why = (a, setterFunction) => {
    const value =a.target.value;
    setterFunction(value === '100000' ? '100000' : '50000');
  };

  return (
    <div>
      <fieldset>
      <h2 id='one'>PRICE CALCULATOR</h2>
      <input type='radio' id='Monthly' name='calc' value='Monthly'></input>
      <label for='Monthly'>Monthly</label>
      <input type='radio' id='yearly' name='calc' value='yearly'></input>
      <label for='yearly'>yearly</label><br></br><br></br>


      <label>Plan:</label>
      <select value={Ques1} onChange={(a)=>Why(a, setQues1)}>
        <option value="">Select an Option</option>
        <option value="100000">Professional</option>
        <option value="50000">Student</option>
        <option value="80000">Teacher</option>
      </select><br></br><br></br>
      <label>Additional trainer license:</label>
      <select value={Ques2} onChange={(a)=>Why(a,setQues2)}>
        <option value="">Select an option</option>
        <option value="1000">1</option>
        <option value="2000">2</option>
        <option value="3000">3</option>
        <option value="4000">4</option>
      </select><br></br><br></br>
      <label>Live participant add-on:</label>
      <select value={Ques3} onChange={(a)=>Why(a,setQues3)}>
        <option value="">Select an option</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="3000">3000</option>
        <option value="4000">4000</option>
      </select>
      
      
       {
        (Ques1 && Ques2 && Ques3)&&(
          <p> Total price: <br></br>{Number(Ques1)+Number(Ques2)+Number(Ques3)} /Month Billed Annually
          </p>
           
        )
      } 
      <textarea /><br></br><br></br>

      <button onClick={alert("your order confirmed")}>BUY NOW </button>
 
        

      </fieldset>
    </div>
  );
};
export default Picker;
*/

/*

import React, {useEffect, useState } from "react";
import axios from "axios";
import "./dot";
import Aron from "./dot";

const Playercomponent =()=> {
  const [vari, setvari] = useState([]);

useEffect(()=> {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    const wowdata = response.data;
    const testapi = wowdata.map(a => a.body);
    setvari(testapi);
   })
    .catch(error => {
      console.error ('Error fetching player data: ', error);
    });
      

},[]);

return(
  <div>
    <h1>Player Divisions:</h1>
    {vari.length> 0 ? (
    <ul>
      {vari.map((justtry, index) => (
        <li key={index}>tobi:{justtry}</li>

       ))}
    </ul>
    ): (
      <Aron/>
    )}
  
  </div>
);
};

export default Playercomponent;
*/



import React,{useState,useEffect} from "react";
import axios from "axios";
import WeatherRate from "./weatherapi";
import './App.css';

const GoldRate =()=> {
  const[goldData, setGoldData] =useState (null);

  useEffect(() => {
    const fetchGoldData = async () => {
    try {
      const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
        headers:{
          'x-access-token' : 'goldapi-a0b8drlp3o2msk-io'

        }
      
      });
      setGoldData(response.data);

    } catch(error) {
      console.error('Error fetching gold data:',error);
    }
  }
 fetchGoldData();
  },[]);
  return(
     <fieldset>
    <div>
      {goldData ? (
      <div>
       <img src=" https://th.bing.com/th/id/OIP.oYDNNgcaDkpFC6TswQHx0AHaDm?w=289&h=170&c=7&r=0&o=5&dpr=1.5&pid=1.7 "></img>
       
      <p>GOLD RATE:{goldData.price}</p>
      <p>EXCHANGE:{goldData.exchange}</p>

    
  
      
    </div>
  ):(
    <p> LOADING PLEASE WAIT....</p>
  )}
  </div>
  </fieldset>
  );
};

export default GoldRate;







