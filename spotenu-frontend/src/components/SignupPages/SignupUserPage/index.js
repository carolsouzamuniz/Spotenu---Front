import React from 'react';
import axios from 'axios';
import { useForm } from './../../../hooks/hooks';
import { useHistory } from 'react-router-dom';


import styled from 'styled-components';

const SignupPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    label{
        display: flex;
        padding-bottom: 16px;
    }
`

export const SignupUserPage = () => {
    const { form, onChange, resetForm } = useForm({
        name:"", 
        email:"", 
        nickname:"", 
        password: ""
    })

    const { name, email, nickname, password } = form;

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        onChange(name, value);
    }

    
    const handleOnSubmit = (event) => {
        event.preventDefault()

        const result = axios.post('http://localhost:3003/user/signupUSER', form).then((response) => {
            window.localStorage.setItem("token", response.data.token)
            alert('Band successfully registered. Waiting for approval from an administrator')
        }).catch((error) => {
            console.log(error.response.data)
            window.alert(('It was not possible to register. Try again later'))
        })
    }

    const history = useHistory();

    return <SignupPageWrapper>
        <h3>Cadastre-se</h3>
        <form onSubmit={handleOnSubmit}>
            <label>
                Nome: 
                <input 
                    type="text" 
                    name="name" 
                    value={form.name}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Email:
                <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required 
                />
            </label>
            <label>
                Nickname:
                <input 
                    type="text" 
                    name="nickname" 
                    value={form.nickname}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                Senha:
                <input 
                    type="password" 
                    name="password" 
                    value={form.password}
                    onChange={handleInputChange}
                    pattern="[A-z0-9,\W]{6,}"
                    required 
                />
            </label>
            <input type="submit" value="Cadastrar" />
        </form>
    </SignupPageWrapper>
}
      


