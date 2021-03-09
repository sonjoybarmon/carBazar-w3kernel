import { Button, Container, Grid, Typography } from '@material-ui/core';
import React ,{ useRef } from 'react';
import { useForm } from "react-hook-form";
import {Card} from 'ui-glassmorphism'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import './SignUp.scss'

const SignUp = () => {
    const { register, errors, handleSubmit, watch} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="signUp">
            <Container>
            <Grid container item md={12}>
                    <Grid md={3} item></Grid>
                    <Grid md={6} item>
                        <Card className="signUp__Wrapper" >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography variant='h6'>
                                    Sign up
                                </Typography>
                                <div className='input_Wrapper'>
                                    <Typography variant='subtitle1'>
                                        First Name
                                    </Typography>
                                    <input 
                                        name="Fname" 
                                        ref={register({ required: true})} 
                                        className='authInput'
                                        placeholder='Enter Your First Name'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.Fname && "First name is required"}
                                    </Typography>

                                    
                                    <Typography variant='subtitle1'>
                                        Last Name
                                    </Typography>
                                    <input 
                                        name="Lname" 
                                        ref={register({ required: true})} 
                                        className='authInput'
                                        placeholder='Enter Your Last Name'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.Lname && "Last name is required"}
                                    </Typography>

                                    <Typography variant='subtitle1'>
                                        Email
                                    </Typography>
                                    <input 
                                        name="email" 
                                        ref={register({ required: true , pattern: /\S+@\S+\.\S+/ })} 
                                        className='authInput'
                                        placeholder='Enter Your Email'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.email && "Please Enter a valid email"}
                                    </Typography>
                                    
                                    <Typography variant='subtitle1'>
                                        password
                                    </Typography>
                                    <input 
                                        name="password" 
                                        type='password'
                                        ref={register({ required: true, minLength: 8 })} 
                                        className='authInput'
                                        placeholder='Enter Your Password'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.password && "Please Enter maximun 8 number"}
                                    </Typography>

                                    <Typography variant='subtitle1'>
                                        Conform Password
                                    </Typography>
                                    <input 
                                        name="ConformPassword" 
                                        type='password'
                                        ref={register({
                                            validate: value =>
                                              value === password.current || "The passwords do not match"
                                          })}
                                        className='authInput'
                                        placeholder='Enter Your Conform Password'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.ConformPassword && "Don't match password"}
                                    </Typography>
                                </div>
                                <Button 
                                    variant='contained' 
                                    color='primary' 
                                    type="submit"
                                    className='signUpButton'
                                > 
                                    Sign In
                                </Button>
                            </form>
                            <Typography variant='subtitle2'>
                                Have an account?
                                <Link to='/login' style={{color : '#fff', marginLeft: '6px'}}>
                                    SignIn
                                </Link>
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SignUp;