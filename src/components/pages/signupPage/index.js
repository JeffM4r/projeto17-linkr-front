import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../../InputComponent';
import {
    Container,
    Header,
    SignUpBody,
    SignupButton
} from './style';

const SignUpPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [pictureUrl, setPictureUrl] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        const body = {
            email,
            password,
            userName,
            pictureUrl
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
            <SignUpBody>
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
                    <InputComponent
                        placeholder="username"
                        value={userName}
                        setValue={setUserName}
                        type='text'
                        required
                    />
                    <InputComponent
                        placeholder="picture url"
                        value={pictureUrl}
                        setValue={setPictureUrl}
                        type='text'
                        required
                    />
                    <SignupButton>Sign Up</SignupButton>
                </form>
                <Link to="/">Switch back to log in</Link>
            </SignUpBody>
        </Container>
    )
}

export default SignUpPage;