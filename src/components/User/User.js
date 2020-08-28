import React from 'react';
import { useState } from 'react';

const User = (props) => {
    const { name, email, website, picture, phone } = props.user;
    const addMember =props.addMember;

    const [mobile, setMobile] = useState('');
    const fullName = name.first + name.last;

    const useStyle = {
        border: '2px solid red',
        margin: '10px',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        width: '40%'
    }

    const showPhone = () => setMobile(phone);

    return (
        <div style={useStyle}>
            <div style={{marginTop: '25px'}}>
                <img src={picture.large} alt="" />

            </div>

            <div style={{marginLeft:'20px'}}>
                <h1> Name: {fullName}</h1>
                <p>email: {email}</p>
                <p><a target="_blank" href={website}>Lear more about me</a></p>
                <p>Phone: {mobile}</p>
                <button onClick={showPhone} >Show Phone Number</button>
                <button onClick={() => addMember(fullName)} >Add me</button>

            </div>

        </div>
    );
};

export default User;