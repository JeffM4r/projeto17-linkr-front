import { useState } from 'react';
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom';
import InputComponent from '../../InputComponent';
import {
    Container,
    Header,
    SignUpBody,
    SignupButton
} from './style';

const SignUpPage = () => {
    let navigate = useNavigate();
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');

    function signUpError(error){
        console.log(error.response.status)
        if(error.response.status === 409){
            alert("Email já cadastrado");
            return
        }
        setIsSigningUp(false);
        alert("Houve um erro nessa tentativa de cadastro, por favor tente novamente");
    }

    function signUpSucces(){
        alert("cadastro feito com sucesso")
        navigate("/")
    }

    function signUp(cadastro) {
        const promise = axios.post(`https://xprojeto17-linkr.herokuapp.com/signup`, cadastro);
        return promise;
    } 
    
    function handleSubmit(e) {
        e.preventDefault();
        if(isSigningUp){return};
        setIsSigningUp(!isSigningUp);

        const body = {
            email,
            password,
            name:userName,
            picture:pictureUrl
        }

        const promise = signUp(body);

        promise.then(response => signUpSucces(response));
        promise.catch(response => signUpError(response));
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