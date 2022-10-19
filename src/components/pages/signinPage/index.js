import { useState } from 'react';
import InputComponent from '../../InputComponent';
import {
  Container,
  Header,
  SignInBody
} from './style';

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container>
      <Header>
        <div>
          <h1>LINKR</h1>
          <h2>save, share and discobery the best links on the web</h2>
        </div>
      </Header>
      <SignInBody>
        <InputComponent placeholder="e-mail" value={email} setValue={setEmail} />
        <InputComponent placeholder="password" value={password} setValue={setPassword} />
      </SignInBody>
    </Container>
  )
}

export default SignInPage;