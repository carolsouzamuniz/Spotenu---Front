import React from 'react';
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/hooks';
import axios from 'axios';

export const LoginPage = () => {
    const { form, onChange, resetForm } = useForm({
      email: '',
      nickname: '',
      password: ''
    });
  
    const { email, nickname, password } = form;
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      onChange(name, value);
    }
  
    const history = useHistory();
  
    const goToPrivateArea = (event) => {
      const body = { email, nickname, password }
      event.preventDefault();
      axios.post('http://localhost:3003/user/login', body)
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        history.push('/home');
        resetForm();
      })
      .catch(error => {
        console.log(error);
        window.alert('Não foi possível acessar')
      })
    }
    
     
    return (
      <div>
        <h3>Pagina de Login</h3>
          <form onSubmit={goToPrivateArea}>
          <label>
                Email:
                <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
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
                    required 
                />
            </label>
            <input type="submit" value="Entrar" />
        </form>
      </div>
     )
  };
  
