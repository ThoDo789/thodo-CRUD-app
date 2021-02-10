import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import NotPage from "./components/NotPage";
import {GlobalProvider} from "./context/GlobleState";

function App() {
    return (
        <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
        <GlobalProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/add" component={AddUser}/>
                    <Route path="/edit/:id" component={EditUser}/>
                    <Route  component={NotPage}/>
                </Switch>
            </Router>
        </GlobalProvider>
        </div>
    );
}

export default App;