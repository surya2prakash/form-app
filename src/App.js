
//import { useState } from 'react';
import './App.css';

import FormData from './Component/FormData';
function App() {
    // importent 2. me chahta hun ki me sab input field ko ek hi state se manage kar lun
       
    // const [formData , setformData] = useState({
    //   firstName:"",
    //   lastName:"",
    //   email:"",
    //   comment:"",
    //   isVisible:true,
    //   mode:"",
    //   favCar:""
    // });

    

    //   function changeHandler(event){

    //     //destructuring krunga--->
    //     const {name,value,type , checked} = event.target;
    //   setformData((prevData)=>
    //     {
    //         return {
    //           ...prevData,
    //     [name]:type ==="checkbox"? checked :value
    //     }
    //   });
    // }

    // function submitHandler(event){

    // event.preventDefault();
    //   console.log(formData);

    // }

    // function changeHandler(event){
    //   setformData((prevData)=>
    //     {
    //         return {
    //           ...prevData,
    //     [event.target.name]:event.target.value
    //     }
    //   });
    // }

  // importent 1. **************** haam haar input field ko alg alg state se manage kar rha hain 

  // const[firstName,setfirstName]=useState("");
  // const[lastName,setlastName]=useState("");

  // function changefirstHandler(event){
  //   setfirstName(event.target.value);
  // };

  // function changelastHandler(event){
  //      setlastName(event.target.value)
  // }

  // console.log(firstName);
  // console.log(lastName);
  return (
    <div className="App">
       {/* <form  onSubmit={submitHandler}>

        <input type='text' placeholder='
        first name' onChange={changeHandler} name='firstName' value={formData.firstName}>
        </input> <br></br>
       <input placeholder='last name' type='text' onChange={changeHandler} name='lastName' value={formData.lastName}></input>
       <br>
       </br>
       <input type='email'onChange={changeHandler}placeholder='Enter Your Email' name='email' value={formData.email}></input>
       <br></br>
       <textarea placeholder='enter your comments ' onChange={changeHandler} name='comment' value={formData.comment}></textarea>
       <br></br>
       <br></br>
       <label htmlFor='isVisible'>Am I visible</label>
       
       <input type='checkbox' onChange={changeHandler} name='isVisible' checked={formData.isVisible} id='isVisible'></input>
       <br></br>
       <br></br>
       <label htmlFor='online_mode'>Online</label>
       <input type='radio' onChange={changeHandler} name='mode'id='online_mode' value="online" checked={formData.mode ==="online"}></input>
         <label htmlFor='offline_mode'>Offline</label>
       <input type='radio' onChange={changeHandler} name='mode'id='offline_mode' value="offline" checked={formData.mode ==="offline"}></input>
          <br></br>
        <label htmlFor='favCar'>Your Fav Car :</label>
       <select name='favCar' onChange={changeHandler} value={formData.favCar} id='favCar'>
        <option value="Scorpio">Scorpio</option>
        <option value="thar">Thar</option>
       </select>
       <br></br>
       <button>Submit</button>
       </form> */}

       <FormData/>
    </div>
  );
}

export default App;
