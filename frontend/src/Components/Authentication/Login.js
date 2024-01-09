import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'



const Login = () => {
    // we use hook to manage state with a functional component
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const[loading,setLoading] = useState(false);
    const toast = useToast();
    const history = useHistory();

    const handleClick = () => {
        setShow(!show);
        console.log(email);
        console.log(password);
    }
    
  //  a function (submitHandler) responsible for handling login form submissions,
    const submitHandler = async () => {
        // setloading help in indicating some process is ongoing 
        setLoading(true);
        // Input Field Validation:- If either field is empty, it triggers a toast notification using the toast function  to inform the user that they need to fill in all fields.
        if (!email || !password) {
            toast({
                title: "Please Fill all the Feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            //  showing the toast notification, it sets setLoading(false) and returns from the function, preventing further execution.
            setLoading(false);
            return;
        }

        // API Request to Backend:If both the email and password fields are filled, it proceeds to make an asynchronous request using Axios to a backend endpoint (/api/user/login) to attempt user login.

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
          // // It sends a POST request with the email and password in the request body and sets the content type as JSON.
            const { data } = await axios.post(
                '/api/user/login',
                { email, password },
                config
            );

            console.log(JSON.stringify(data));
            // it show a success toast notification indicating successful logiin
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            // stores user info in local storage
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            //Navigates the user to the "/chats" route using useHistory hook
            history.push("/chats");
        }
        // error handling 
        catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast({
                    title: "Error Occurred!",
                    description: error.response.data.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });
            } else {
                toast({
                    title: "Error Occurred!",
                    description: "An unexpected error occurred.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });
            }
            setLoading(false);
        }
        
    }
    return (
        <VStack spacing='5px' >
            <FormControl id='loginEmail' isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} type='email' value={email} />
            </FormControl>

            <FormControl id='loginPassword' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} type={show ? 'text' : 'password'} value={password} />
                    <InputRightElement width={'4.5rem'}>
                        <Button h={'1.75rem'} size='md' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme='blue' width={'100%'} style={{ marginTop: 15 }} onClick={submitHandler} isLoading={loading}>
                Login
            </Button>
            <Button variant={'solid'} colorScheme='red' width={'100%'} style={{ marginTop: 15 }} onClick={() => {
                setEmail('guestexample@gmail.com')
                setPassword('123456')
            }}>
                Get Guest User Credentials
            </Button>
        </VStack>
    )
}

export default Login
