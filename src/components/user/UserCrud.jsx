import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from './components/UserList'
import UserForm from './components/UserForm'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários'
}


export default class UserCrud extends Component {

    render() {
        //console.log(this.state.list);
        return (
            <Main {...headerProps}>
                <UserForm></UserForm>
                <UserList></UserList>
            </Main>
        )
    }
}