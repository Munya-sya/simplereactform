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
                    First Name: 
                    <input name="firstName" type="text" onchange={handleChange}/> 
                </label> <br/>
                <label> 
                    Middle Name: 
                    <input name="middleName" type="text" onchange={handleChange}/> 
                </label> <br/>
                <label> 
                    Last Name: 
                    <input name="lastName" type="text" onchange={handleChange}/> 
                </label> <br/>
                <input type="submit" value="submit"/> 
            </form> 
        </div> 
    ); 
}
export default Contact;