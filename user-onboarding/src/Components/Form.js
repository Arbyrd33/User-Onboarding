import React from 'react'

export default function Form(props){
    const {
        values
    } = props;

    const onSubmit(){
        return;
    }
    const onChange(){
        return;
    }




    return (
        <div className="onboardingForm">
            <form>

                <label>Hello, My Name Is ___</label><br/>
                <input
                    name="name"
                    type="text"
                    value={values.name}
                    onchange={onChange}
                />

            </form>
        </div>
    )
    // - [ ] Name (first_name, last_name)
    // - [ ] Email
    // - [ ] Password
    // - [ ] Terms of Service (checkbox)
    // - [ ] A Submit button to send our form data to the server.
}