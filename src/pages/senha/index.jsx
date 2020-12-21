import React, {useState} from 'react';
import { useFirebaseApp } from 'reactfire';
import { Container, Form, Button } from 'react-bootstrap'
import logo from '../../assets/img/logo.jpg';
import './index.css';
const EsqueciSenha= () => {
const firebase = useFirebaseApp();
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

    return (
        <Container className='form-height'>
                <Form className='form-signin'>
                    <div className='text-center'>
                     <img src={logo} alt='CLogo' style={{ width : '64px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Informe o email" required />
                    </Form.Group>
                    <Button className='bottom' variant="primary" type="submit" >
                        Cadastrar
                    </Button>
                    <br/><br/>
                    <a href='/login' style={{ marginTop :'30px'}}>Já tenho conta!</a>
                </Form>
        </Container>

    )
}

export default EsqueciSenha;