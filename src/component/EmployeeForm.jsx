import { useState } from "react";
import "./EmployeeForm.css";

const EmployeeForm = (props) => {
    // console.log("EmployeeForm", props);
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [position, setPosition] = useState('');
    
    const inputName = (e) => {
        setName(e.target.value);
    }
    const inputLastName = (e) => {
        setLastName(e.target.value);
    }
    const inputPosition = (e) => {
        setPosition(e.target.value);
    }
    const handleSave = () => {
        props.handleAddEmployee({
            name,
            lastname,
            position,
        })
    }

    return(
        <div className="form-input">
            <input type="text" placeholder="Name" onChange={inputName}/>
            <input type="text" placeholder="Last Name" onChange={inputLastName}/>
            <input type="text" placeholder="Position" onChange={inputPosition}/>
            <button className="btn" onClick={handleSave}>Save</button>
        </div>
    )
}

export default EmployeeForm;