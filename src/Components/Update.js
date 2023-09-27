import axios from "axios";
import React,{useState,useEffect} from "react";
import {Form, Button, Checkbox} from 'semantic-ui-react'
import { API_URL } from "../Constant/URL";
import {useNavigate} from 'react-router-dom'

function Update(){
    const [firstName,setFristName]=useState('');
    const [lastName,setLastName]=useState('');
    const [id,setId]=useState('');
    const [check,setCheck]=useState(false);
    const navigate=useNavigate();

    const updateuser= async ()=>{
         await axios.put(API_URL + id,{
            firstName,
            lastName,
            check
         })
         navigate('/read')
    }

    useEffect(()=>
    {
        setId(localStorage.getItem('id'))
        setFristName(localStorage.getItem('firstName'))
        setLastName(localStorage.getItem('lastName'))
        setCheck(localStorage.getItem('check'))
    },[])
    return(
        <Form className="form">
            <Form.Field>
                <label>First Name</label>
                <input value={firstName} onChange={e=>setFristName(e.target.value)} placeholder="Enter First Name"/>
            </Form.Field>
            <br></br>
            <Form.Field>
                <label>Last Name</label>
                <input value={lastName} onChange={e=>setLastName(e.target.value)} placeholder="Enter Last Name"/>
            </Form.Field>
<br></br>
            <Form.Field>
               
                <Checkbox checked={check} onChange={()=>setCheck(!check)} labels='Agree the Terms & Contions' placeholder="Enter First Name"/>
            </Form.Field>
<br></br>
            <Button onClick={updateuser}>Update</Button>
        </Form>
    )
}
export default Update