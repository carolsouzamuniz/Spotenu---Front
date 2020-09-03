import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const SignupPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    label{
        display: flex;
        padding-bottom: 16px;
    }
`
const useForm = initialValues => {
    const [form, setForm] = useState(initialValues);
  
    const onChange = (name, value) => {
      const newForm = { ...form, [name]: value };
      setForm(newForm);
    };
  
    return { form, onChange };
  };
  
export const SignupAdminPage = () => {
    const { form, onChange } = useForm({
        name:"", 
        email:"", 
        nickname:"", 
        password: ""
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        onChange(name, value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const result = axios.post('http://localhost:3003/user/signupADMIN', form).then((response) => {
            window.localStorage.setItem("token", response.data.token)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
    
    return <SignupPageWrapper>
        <h3>Cadastrar novo administrador</h3>
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
                    pattern="[A-z0-9,\W]{10,}"
                    required 
                />
            </label>
            <input type="submit" value="Cadastrar" />
        </form>
    </SignupPageWrapper>
      
}

