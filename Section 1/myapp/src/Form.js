import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Form = () => {
    const [name, setName] = useState('');
    const butt = 'asdasdasd';
    const handleChange = (event) => {        
        setName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    }
    return (
        <form>            
            <div>
                <label className="label">Enter Name:</label>
                <input id="name" type="text" onChange={handleChange}/>
                <button type="submit" style={{backgroundColor: 'blue', color: 'white'}} onSubmit={(event) => handleSubmit(event)}>{butt}</button>
            </div>
            <p>{name}</p>
        </form>


    );
}

export default Form;
