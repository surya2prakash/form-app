import React, { useState } from 'react'

function FormData(){
      
    const [formData,setFormData] = useState({
                                           
                                                firstName:"",
                                                lastName:"",
                                                email:"",
                                                password:"",
                                                confirmPassword:"",
                                                gender:"",
                                                country:"",
                                                pincode:"",
                                                hobbies:"",
                                                aboutYourSelf:""
                                                      });


     function changeHandler(event){
              // prev state jo hai usko preserv krna hai aur new ko update bhi krna hai
              setFormData((prevData)=>{return{...prevData,
                 [event.target.name]:event.target.value   
     }})
     }                                                 
       
     console.log(formData.firstName);

    return(
          <div>
                <h2>Fill The Form Details</h2>

                <form >
                    
                    <label htmlFor='first'>First Name:</label>
                    <input type='text' placeholder='Enter Your First Name' id='first' name='firstName' onChange={changeHandler}></input>

                    <label htmlFor='last'>Last Name:</label>
                     <input type='text' placeholder='Enter Your Last Name'id='last' name='lastName' onChange={changeHandler}></input>

                     <label htmlFor='email'>Email :</label>
                     <input type='email' placeholder='Enter email' id='email'name='email' onChange={changeHandler}></input>

                     <label htmlFor='pass'>Password :</label>
                     <input type='password' placeholder='Enter Password' id='pass' name='password' onChange={changeHandler}></input>

                     <label htmlFor='confirm'> Confirm Password :</label>
                     <input type='password' placeholder='Enter confirm Password' id='confirm'name='confirmPassword' onChange={changeHandler}></input>
                     <div>
                     <label >Gender :</label>
                     
                     <input type='radio'  id='gen_male' name='gender' value="Male" onChange={changeHandler} ></input>
                     <label htmlFor='gen_male'>Male</label>
                    
                     <input type='radio' id='gen_female' name='gender' value="Female" onChange={changeHandler}></input>
                     <label htmlFor='gen_female' >Female</label>
                    
                     <input type='radio' id='gen_other' name='gender' value="Other" onChange={changeHandler}></input>
                     <label htmlFor='gen_other'>Other</label>
                     </div>

                     <div>
                        <label htmlFor='country'>Country :</label>
                        <select id='country' name='country' onChange={changeHandler}>
                            <option value="">--Select--</option>
                            <option value="India">India</option>
                            <option value="United-State">United-State</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                            <option value="Austrilia">Austrilia</option>
                        </select>
                     </div>
                     <div>
                        <label htmlFor='pin'>Pin Code :</label>
                        <input id='pin' type='password' maxLength="6" placeholder='enter pin Code' name='pincode'onChange={changeHandler}></input>
                     </div>
                    
                     <div>
                        <label >Hobbies :</label>
                        <br></br>
                        <input type='checkbox' id='foot' name='hobbies' value="football" onChange={changeHandler}></input>
                        <label htmlFor='foot'>Football</label>
                        <input type='checkbox' id='cric' name='hobbies' value="cricket" onChange={changeHandler}></input>
                        <label htmlFor='cric'>Cricket</label>
                        <input type='checkbox' id='teni' name='hobbies' value="tenis" onChange={changeHandler}></input>
                        <label htmlFor='teni'>Tenis</label>
                        <input type='checkbox' id='kabad' name='hobbies' value="kabaddi" onChange={changeHandler}></input>
                        <label htmlFor='kabad'>Kabaddi</label>
                         <input type='checkbox' id='run' name='hobbies' value="running" onChange={changeHandler}></input>
                        <label htmlFor='run'>Running</label>
                       <input type='checkbox' id='movie' name='hobbies' value="watching_movie" onChange={changeHandler}></input>
                        <label htmlFor='movie'>Watching Movie</label>
                        <input type='checkbox' id='game' name='hobbies' value="playing_mobile_games" onChange={changeHandler}></input>
                        <label htmlFor='game'>Playing Mobile Games</label>
                        
                     </div>
                      <div>
                        <label htmlFor='about'>About YourSelf :</label>
                        
                        <textarea rows="10" cols="40" id='about' name='aboutYourSelf' onChange={changeHandler}></textarea>
                     </div>

                     <button>Submit</button>
                </form>
          </div>
    )
};

export default FormData;
