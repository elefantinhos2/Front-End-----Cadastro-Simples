import { useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
// import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom";
// import FormCadastro from "../components/FormCadastro";
import Form from "../components/Pages/Form";
import Login from "../components/Pages/Login";
import User from "../components/Pages/User";

function Routes({user}) {


    const [users, setUsers] = useState([])


    const [userObject, setUserObject] = useState();
  

    return (
        <Switch>
            <Redirect exact from="/" to="/Form" />
            <Route exact path="/Form">
                <Form setUserObject={setUserObject} users={users} setUsers={setUsers}/>
            </Route>
            <Route exact path="/Form/success/:name">
                <User users={users} setUsers={setUsers} setUserObject={setUserObject}/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    );
}

export default Routes;
