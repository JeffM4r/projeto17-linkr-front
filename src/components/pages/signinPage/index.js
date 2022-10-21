import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import InputComponent from '../../InputComponent';
import {
  Container,
  Header,
  SignInBody,
  LoginButton,
  DisableButton,
  GoSignUpBtn
} from './style';

const SignInPage = () => {
  const navigate = useNavigate()

  const {setToken,setPictureUrl} = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('linkrUserToken') !== null){
      const localToken = JSON.parse(localStorage.getItem('linkrUserToken'))
      const localPictureUrl = JSON.parse(localStorage.getItem('pictureUrl'))
      setToken(localToken);
      setPictureUrl(localPictureUrl)
      console.log(localToken)
      console.log(localPictureUrl)
      navigate('/timeline');
    }
  }, [])

  function signIn (body) {
    const promise = axios.post('http://localhost:4000/signin', body)
    return promise;
  }

  async function handleSubmit (e) {
    setIsLoading(true)
    e.preventDefault();
    const body = {
      email,
      password
    }
 
    const resp = signIn(body)
    resp.catch((error) => {
      setIsLoading(false)
      console.log(error)
      if(error.response.status === 401) {
        return alert('Usuario e/ou senha incorretos!')
      }else{
        alert('Ouve um erro inesperado!')
      } 
    })
    resp.then((resp) => {
      console.log(resp.data) 
      localStorage.setItem('linkrUserToken', JSON.stringify(resp.data.token))
      localStorage.setItem('pictureUrl',JSON.stringify(resp.data.picture))
      setToken(resp.data.token) 
      setPictureUrl(resp.data.picture)
      setIsLoading(false)
      navigate('/timeline')
    })
  }

  return (
    <Container>
      <Header>
        <div>
          <h1>LINKR</h1>
          <h2>save, share and discobery the best links on the web</h2>
        </div>
      </Header>
      <SignInBody>
        <form onSubmit={handleSubmit}>
          <InputComponent 
            placeholder="e-mail" 
            value={email} 
            setValue={setEmail} 
            type='email'
            required
          />
          <InputComponent 
            placeholder="password" 
            value={password} 
            setValue={setPassword} 
            type="password"
            required
          />
          {
            isLoading ?
              <DisableButton>Log In</DisableButton>
            :
              <LoginButton>Log In</LoginButton>
          }
        </form>
        <GoSignUpBtn onClick={() => {navigate('/signup')}}>First time? Create an account!</GoSignUpBtn>
      </SignInBody>
    </Container>
  )
}

export default SignInPage;