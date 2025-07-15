import React, { useState } from 'react'

import './FormData.css'

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
                                                hobbies:[],
                                                aboutYourSelf:""
                                                      });


     function changeHandler(event){
              // prev state jo hai usko preserv krna hai aur new ko update bhi krna hai

              //destructure kar liya ---->
             const {name,type,value,checked} = event.target;
             //checkbox ko alg se handle karna pade ga
              if(type === "checkbox"){
                   
                //do case honge ya to user multiple select kre ga yaa fir select kar ke fir unSelect bhi kar sakta hai 

                setFormData((prevData)=>{
                    
                        //ager checked kiya hai to 
                          if(checked)
                          {
                            //add kro
                               return{
                                    ...prevData,
                                   [name] :[...prevData[name],value]
                               };
                          }else{
                              return{
                                  ...prevData,
                                  [name]:prevData[name].filter((hobby)=>hobby !== value)
                              }
                          }
                    
                         
                })

              }else{
              setFormData((prevData)=>{return{...prevData,
                 [name]:value  
                  }})
              }
              
    
     }                                                 
       
     function submitHandler(event){
        event.preventDefault();

        console.log(formData)

     }
  

     

    return(
          <div className='main'>
                <h2 className='heading'>Fill The Form Details</h2>

                <form  onSubmit={submitHandler} className='form_Container'>
                    
                    <label htmlFor='first'>First Name:</label>
                    <input type='text' placeholder='Enter Your First Name' id='first' name='firstName' onChange={changeHandler} value={formData.firstName}></input>

                    <label htmlFor='last'>Last Name:</label>
                     <input type='text' placeholder='Enter Your Last Name'id='last' name='lastName' onChange={changeHandler} value={formData.lastName}></input>

                     <label htmlFor='email'>Email :</label>
                     <input type='email' placeholder='Enter email' id='email'name='email' onChange={changeHandler} value={formData.email}></input>

                     <label htmlFor='pass'>Password :</label>
                     <input type='password' placeholder='Enter Password' id='pass' name='password' onChange={changeHandler} value={formData.password}></input>

                     <label htmlFor='confirm'> Confirm Password :</label>
                     <input type='password' placeholder='Enter confirm Password' id='confirm'name='confirmPassword' onChange={changeHandler} value={formData.confirmPassword}></input>
                     <div>
                     <label >Gender :</label>
                     
                     <input type='radio'  id='gen_male' name='gender' value="Male" onChange={changeHandler} checked={formData.gender ==="Male"}></input>
                     <label htmlFor='gen_male'>Male</label>
                    
                     <input type='radio' id='gen_female' name='gender' value="Female" onChange={changeHandler} checked={formData.gender ==="Female"}></input>
                     <label htmlFor='gen_female' >Female</label>
                    
                     <input type='radio' id='gen_other' name='gender' value="Other" onChange={changeHandler} checked={formData.gender ==="Other"}></input>
                     <label htmlFor='gen_other'>Other</label>
                     </div>

                     <div>
                        <label htmlFor='country'>Country :</label>
                        <select id='country' name='country' onChange={changeHandler} value={formData.country}>
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
                        <input id='pin' type='password' maxLength="6" placeholder='enter pin Code' name='pincode'onChange={changeHandler} value={formData.pincode}></input>
                     </div>
                    
                     <div>
                        <label >Hobbies :</label>
                        <br></br>
                        <input type='checkbox' id='foot' name='hobbies' value="football" onChange={changeHandler} checked={formData.hobbies.includes( "football")}></input>
                        <label htmlFor='foot'>Football</label>
                        <input type='checkbox' id='cric' name='hobbies' value="cricket" onChange={changeHandler} checked={formData.hobbies.includes( "cricket")}></input>
                        <label htmlFor='cric'>Cricket</label>
                        <input type='checkbox' id='teni' name='hobbies' value="tenis" onChange={changeHandler} checked={formData.hobbies.includes( "tenis")}></input>
                        <label htmlFor='teni'>Tenis</label>
                        <input type='checkbox' id='kabad' name='hobbies' value="kabaddi" onChange={changeHandler} checked={formData.hobbies.includes( "kabaddi")}></input>
                        <label htmlFor='kabad'>Kabaddi</label>
                         <input type='checkbox' id='run' name='hobbies' value="running" onChange={changeHandler} checked={formData.hobbies.includes( "running")}></input>
                        <label htmlFor='run'>Running</label>
                       <input type='checkbox' id='movie' name='hobbies' value="watching_movie" onChange={changeHandler} checked={formData.hobbies.includes( "watching_movie")}></input>
                        <label htmlFor='movie'>Watching Movie</label>
                        <input type='checkbox' id='game' name='hobbies' value="playing_mobile_games" onChange={changeHandler} checked={formData.hobbies.includes( "playing_mobile_games")}></input>
                        <label htmlFor='game'>Playing Mobile Games</label>
                        
                     </div>
                      <div>
                        <label htmlFor='about'>About YourSelf :</label>
                        
                        <textarea rows="10" cols="40" id='about' name='aboutYourSelf' onChange={changeHandler} value={formData.aboutYourSelf}></textarea>
                     </div>

                     <button>Submit</button>
                </form>
          </div>
    )
};

export default FormData;
