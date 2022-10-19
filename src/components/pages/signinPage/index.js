import { useState } from 'react';
import InputComponent from '../../InputComponent';
import {
  Container,
  Header,
  SignInBody,
  LoginButton,
  GoSignUpBtn
} from './style';

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit (e) {
    e.preventDefault();
    const body = {
      email,
      password
    }
    console.log(body)
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
          <LoginButton>Log In</LoginButton>
        </form>
        <GoSignUpBtn>First time? Create an account!</GoSignUpBtn>
      </SignInBody>
    </Container>
  )
}

export default SignInPage;