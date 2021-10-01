import { React, useState } from "react";
function RegistrationForm(props) {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value)
    }

    const handleEmailChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Email"
                onChange={handleEmailChange}
            />
            <button>Save</button>
        </form>
    )
}
export default RegistrationForm;