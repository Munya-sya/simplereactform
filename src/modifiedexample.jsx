import React from 'react';
import { useState} from 'react';
import ReactDOM from 'react-dom';

function Contact(){
    const [data, setData] = useState({});  
    const handleChange = (e)=>{ 
        const name = e.target.name;
        const value = e.target.value;
        const currentInputFieldData = {
            [name]:value
        }
        const updatedData = {
            ...data,
            ...currentInputFieldData
        }
        setData(updatedData);
    } 
    const handleSubmit = (e)=>{ 
        console.log(data); 
       e.preventDefault(); 
    } 
    return( 
        <div> 
            <h1>This is the Contact page</h1> 
            <form onSubmit={handleSubmit}> 
                <label> 
                Student ID number: 
                    <input name="idno" type="text" onchange={handleChange}/> 
                </label> <br/>
                <label> 
                Date of birth: 
                    <input name="DOB" type="date" onchange={handleChange}/> 
                </label> <br/>
                <label> 
                Gender: 
                <select name="Gender" onchange={handleChange}>
                    <option value="-"></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </label> <br/>
                <label> 
                Email address: 
                    <input name="emailaddress" type="email" onchange={handleChange}/> 
                </label> <br/>
                <label> 
                Is enrolled: 
                <select name="enrolled" onchange={handleChange}>
                    <option value="-"></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </label> <br/>
                <input type="submit" value="submit"/> 
            </form> 
        </div> 
    ); 
}
export default Contact;