import React from 'react'

export default function Form(){
    // const {
    //     disabled,
    //     values
    // } = props;

    // const onSubmit = (e)=>{
    //     e.preventDefault()
    //     return;
    // }
    // const onChange= (e)=>{
    //     console.log(e.target);
    //     const {name, value} = e.target;
    //     return;
    // }




    return (
        <div className="form container">
            <form>
                <label><h2>Hello, My Name Is ___</h2></label>
                <input
                    name = "first_name"
                    type = "text"
                    placeholder = "First Name"
                />
                <input
                    name = "last_name"
                    type = "text"
                    placeholder = "Last Name"
                /> <br/>
                <input
                    name="email"
                    type="email"
                    placeholder="email@address.com"
                />
                <input
                    name="pass"
                    type="password"
                    placeholder="Enter secure password."
                /><br/>
                <label>
                <input 
                    className = "tos"
                    name="tos"
                    type="checkbox"
                    
                />     &nbsp; &nbsp;    I agree to the terms and services of this website.</label><br/>
                <label>
                <input
                    name="tos"
                    type="checkbox"
                    
                /> &nbsp; I agree to receive emails and newsletters from this website.</label>
            <div className="submit">
                <button disabled={true}>==> proceed</button>
            </div>
            </form>
        </div>
    )
    // - [ x ] Name (first_name, last_name)
    // - [ x ] Email
    // - [ x ] Password
    // - [ ] Terms of Service (checkbox)
    // - [ ] A Submit button to send our form data to the server.
}