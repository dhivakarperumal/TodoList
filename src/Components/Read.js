import axios from "axios";
import React,{useState,useEffect} from "react";
import {Table,Button} from 'semantic-ui-react';
import { API_URL } from "../Constant/URL";
import {useNavigate} from 'react-router-dom'
import Container from "react-bootstrap/esm/Container";
import Row  from "react-bootstrap/esm/Row";
import Col  from "react-bootstrap/esm/Col";


function Read(){
 const [apinData,setAPIData]=useState([]);
 const navigate=useNavigate()

 const updateUser = ({firstName,lastName,check,id})=>
 {
    localStorage.setItem('id',id)
    localStorage.setItem('firstName',firstName)
    localStorage.setItem('lastName',lastName)
    localStorage.setItem('check',check)
    navigate('/update')   
 }

 const deleteUser = async (id)=>{
   await axios.delete(API_URL + id)
   callGetAPI()
 }

 const callGetAPI = async () =>{
    const resp=await axios.get(API_URL);
    setAPIData(resp.data)
 }
 useEffect(()=>{
    callGetAPI();

 },[]);
    return(
       <Container>
         <Row>
            <Col>
            <Table singleLine >
            <Table.Header className="mb-5">
                <Table.Row className="heding">
                   
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    apinData.map(data =>(
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.check ? 'check':'Notcheck'}</Table.Cell>
                            <Table.Cell><Button onClick={()=>deleteUser(data.id)}>Delete</Button></Table.Cell>
                            <Table.Cell><Button onClick={()=>updateUser(data)}>Update</Button></Table.Cell>
                        </Table.Row>
                    ))
                }
               
            </Table.Body>
            
        </Table>
            
            </Col>
         </Row>
       </Container>
    )
}
export default Read