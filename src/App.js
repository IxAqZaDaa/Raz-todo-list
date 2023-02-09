import './App.css';
import { useState } from 'react';
function App() {
  



  let [str,setStr] = useState([{}]);
// let [add,setAdd] = useState(true);
  // let [age,SetAge] = useState(25);

  // const DecHandler=()=>{
  //   // alert("meow Meow")
  //   SetAge(age-1)
  // }
// const ToggleHandler = () =>{

// setAdd(!add)
// }

// const IncHandler=()=>{
//   // alert("meow Meow")
//   SetAge(age+1)
// }

const AddTask=()=>{
  setStr([...str,str])


}

  return (
    <>
  {str = <input type={"Text"}/>}
   <br/>
   <button onClick={AddTask}>Add more tasks</button>
   
        {/* {add && <h1>this is message</h1>}
  <button onClick={ToggleHandler}> {add ? "Hide" : "Show"}</button>
{/* <p>age: {age}</p>    */}
{/* <button onClick={IncHandler}> Increment</button> */} 
{/* <button onClick={DecHandler}> Decrement</button> */}

 </>
  )
}

export default App;
