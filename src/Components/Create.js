import axios from "axios";
import React, { useState } from "react";
import { API_URL } from '../Constant/URL';
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Create() {

    const [firstName, setFristName] = useState('');
    const [lastName, setLastName] = useState('');
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();

    const postData = async () => {
        await axios.post(API_URL, {
            firstName,
            lastName,
            check
        })
        navigate('/read')
    }


    return (
        <Container>
            <Row>
                <div className="text-center">
                    <Form className="form">
                        <Form.Field>
                            <label>First Name</label>
                            <input value={firstName} onChange={e => setFristName(e.target.value)} placeholder="Enter First Name" />
                        </Form.Field>
                        <br></br>
                        <Form.Field>
                            <label>Last Name</label>
                            <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Enter Last Name" />
                        </Form.Field>
                        <br></br>
                        <Form.Field>

                            <Checkbox checked={check} onChange={() => setCheck(!check)} className="checks" labels='Agree the Terms & Contions' placeholder="Enter First Name" />
                        </Form.Field>
                        <br></br>
                        <Button onClick={postData}>Add Data</Button>
                    </Form>
                </div>
            </Row>
        </Container>
    )
}
export default Create