import React, {useState} from 'react';
import { useFirebaseApp } from 'reactfire';
import { Container, Form, Button } from 'react-bootstrap'
import logo from '../../assets/img/logo.jpg';
import './index.css';
const Login = () => {
const firebase = useFirebaseApp();    
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const logar = (event) => {
    event.preventDefault();

    console.log(`${email} - ${senha}`);

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(result => {
            localStorage.setItem('tarefas', result.user.refreshToken);
            console.log (result);
            alert('Seja bem vindo');
        })
        .catch(error => {
            alert('Email ou senha inválidos');
            console.error(error);
        })
}
    return (
        <Container className='form-height'>
                <Form className='form-signin'onSubmit={event => logar(event)}>
                    <div className='text-center'>
                     <img src={logo} alt='CLogo' style={{ width : '64px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)}  required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" value={senha} onChange={event => setSenha(event.target.value)} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/cadastrar' style={{ marginTop :'30px'}}>Não tenho conta!</a>
                </Form>
        </Container>

    )
}

export default Login;