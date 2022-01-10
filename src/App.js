import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CalButtton from './CalButtton';

function App() {
  let initialState = Date()
  const [date, setdate] = useState(initialState)
  const [month, setmonth] = useState(initialState)
  const [year, setyear] = useState(initialState)
  const [arr, setarr] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"])
  let mon_name = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
  
  const [i, setimon] = useState(0)
  const[j,setjyear] = useState(2000)
  let dt = date.split(" ")
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {
        dt[1]
      }

      {
        dt[2]
      }{
        dt[3]
      }
      <br />
      <div className='monthselect'>
        <button onClick={() => 
          { if (i == 0) 
            { setimon(11) } 
          else
           { setimon(i - 1)  
           }
            }}>-</button>{mon_name[i]} <button onClick={() => 
            { 
              setimon((i + 1) % 12) 
              }}>+</button>
      </div>
      <div className='yearselect'>
        <button onClick={() => 
         
         
           {setjyear(j - 1)  
           
            }}>-</button>{j} <button onClick={() => 
            { 
              setjyear(j + 1)  
              }}>+</button>
      </div>

      <div className="App">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>


        <CalButtton title={arr[0]} />
        <CalButtton title={arr[1]} />
        <CalButtton title={arr[2]} />
        <CalButtton title={arr[3]} />
        <CalButtton title={arr[4]} />
        <CalButtton title={arr[5]} />
        <CalButtton title={arr[6]} />

        <CalButtton title={arr[7]} />
        <CalButtton title={arr[8]} />
        <CalButtton title={arr[9]} />
        <CalButtton title={arr[10]} />
        <CalButtton title={arr[11]} />
        <CalButtton title={arr[12]} />
        <CalButtton title={arr[13]} />

        <CalButtton title={arr[14]} />
        <CalButtton title={arr[15]} />
        <CalButtton title={arr[16]} />
        <CalButtton title={arr[17]} />
        <CalButtton title={arr[18]} />
        <CalButtton title={arr[19]} />
        <CalButtton title={arr[20]} />

        <CalButtton title={arr[21]} />
        <CalButtton title={arr[22]} />
        <CalButtton title={arr[23]} />
        <CalButtton title={arr[24]} />
        <CalButtton title={arr[25]} />
        <CalButtton title={arr[26]} />
        <CalButtton title={arr[27]} />

        <CalButtton title={arr[28]} />
        <CalButtton title={arr[29]} />
        <CalButtton title={arr[30]} />
        <CalButtton title={arr[31]} />
        <CalButtton title={arr[32]} />
        <CalButtton title={arr[33]} />
        <CalButtton title={arr[34]} />


      </div>
    </div>
  );
}

export default App;
