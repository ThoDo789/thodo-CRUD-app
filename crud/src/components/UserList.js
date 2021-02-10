import React, {useContext} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemHeading, Button} from "reactstrap";
import {Link} from "react-router-dom";
import {GlobalContext} from "../context/GlobleState";

const UserList = () => {
    const {users,removeUser} = useContext(GlobalContext)
    console.log(users)
   const userList= users.map(user=>{
        return(
            <ListGroupItem className="d-flex justify-content-between" key={user.id}>
                <strong className='d-block'>{user.name}</strong>
                <div className="">
                    <Link to={`/edit/${user.id}`} className="btn btn-warning mr-1">Edit</Link>
                    <Button onClick={()=>removeUser(user.id)} color="danger">Delete</Button>
                </div>
            </ListGroupItem>
        )

    })
    return (

        <div>
            <ListGroupItemHeading className="text-center">List</ListGroupItemHeading>
            <ListGroup>
                {userList}
            </ListGroup>
        </div>
    );
};

export default UserList;