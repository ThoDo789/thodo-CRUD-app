import React, {useContext, useState, useEffect} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import {Link, useHistory} from "react-router-dom";
import {GlobalContext} from "../context/GlobleState";


const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({id: '', name: ''})
    const {users,editUser} = useContext(GlobalContext)
    const currentUserId = props.match.params.id
    console.log(currentUserId)
    const history = useHistory()

    useEffect(()=>{
        const userId= currentUserId;
        const selectedUser = users.find(user=>user.id === userId)
        setSelectedUser(selectedUser)
    },[currentUserId,users])


    const onChange = (e) => {
        setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
    }

    const onSubmit = () => {
        editUser(selectedUser)

        history.push('/')
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Edit Name</Label>
                    <Input type="text"
                            name="name"
                           value={selectedUser.name}
                           onChange={onChange}
                           placeholder="Enter name"/>
                </FormGroup>
                <Button type='submit'>Submit</Button>
                <Link to="/" className="btn btn-danger ml-2"> Cancel</Link>
            </Form>
        </div>
    );
};

export default EditUser;