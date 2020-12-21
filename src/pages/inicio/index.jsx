import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table, Card } from 'react-bootstrap';
import {db} from '../../utils/firebaseConfig';

const TarefasPage = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        listarTarefas ();
    }, [])

    const listarTarefas = () => {
        try {
            db.collection('tarefas')
                .get()
                .then((result) => {
                    console.log(result.docs);
                    const data = result.docs.map(doc => {
                        return {
                            id: doc.id,
                            nome: doc.data().nome,
                        }
                    })
                    setTarefas(data);
                })
                .catch(error => {
                    console.error(error)
                });

        } catch (error) {
            console.error(error)
        }
    }

    const salvar = (event) => {
        event.preventDefault();

        const tarefa = {
            nome: nome
        }
        if (id === 0) {
            db.collection('tarefas')
                .add(tarefa)
                .then(() => {
                    alert('Tarefa Cadastrada');
                    listarTarefas();
                    limparCampos();
                })
                .catch(error => console.error(error));
        } else {
            db.collection('tarefas')
                .doc(id)
                .set(tarefa)
                .then(() =>{
                    alert('Tarefa Alterada com Sucesso');
                    listarTarefas();
                    limparCampos();
                })
        }
        const limparCampos = () => {
            setId(0);
            setNome('');
        }
    }

    const remover = (event) => {
        event.preventDefault();

        db.collection('tarefas')
            .doc(event.target.value)
            .delete()
            .then(() =>{
                alert('Tarefa removida com sucesso')
                listarTarefas();
            })
    }

    const editar = (event) => {
        try {
            db.collection('tarefas')
                .doc(event.target.value)
                .get()
                .then(doc =>{
                    setId(doc.id);
                    setNome(doc.data().nome);
                });
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div>
            <Container>
                <h1>Tarefas</h1>
                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Nome do evento"></Form.Control>
                            </Form.Group>
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tarefas.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>
                                            <Button variant="warning" value={item.id} onClick={event => editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.id} onClick={event => remover(event)} style={{ marginLeft: '40px' }}>Remover</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default TarefasPage;