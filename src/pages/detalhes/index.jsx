import React, { useState, useEffect } from 'react';
import { useFirebaseApp } from 'reactfire';
import { Container, Form, Button } from 'react-bootstrap'
import logo from '../../assets/img/logo.jpg';
import './index.css';

const Detalhes = () => {


    const [nome, setNome] = useState("")

    const [email, setEmail] = useState("")

    const firebase = useFirebaseApp();
    var user = firebase.auth().currentUser;

    const perfil=()=>{
        if (user != null) {
            user.providerData.forEach(function (profile) {
                setNome(profile.displayName);
                setEmail(profile.email);
            });
        }
    }

    useEffect(() => {
        
    })
    
    return (

        <div>
    
            <h1>{email} </h1>
    
        </div>
    
    
    )
}


export default Detalhes;


