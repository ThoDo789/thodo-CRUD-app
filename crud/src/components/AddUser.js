import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobleState";
import { v4 as uuid } from "uuid";
const AddUser = () => {
  const [name, setName] = useState("");

  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const onChange = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
    };
    if (name!=='') {
      addUser(newUser);
      history.push("/");
    }
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter name"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          {" "}
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddUser;
