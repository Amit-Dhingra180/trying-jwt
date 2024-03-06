import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const Home = () => {
    const [emailID, setEmailID] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmailID(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to your backend endpoint
            const response = await axios.post('http://localhost:3001/api/form', {
                email: emailID,
                password: password
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Email:
                <input type='email' onChange={handleEmail} className='border-2'></input>
                Password:
                <input type='password' onChange={handlePassword} className='border-2'></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Home;
