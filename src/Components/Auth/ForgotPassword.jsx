import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";
import {Card} from 'ui-glassmorphism';
import 'ui-glassmorphism/dist/index.css';
import './ForgotPassword.scss'


const ForgotPassword = () => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='forgotBg'>
            <Container>
                <Grid container item md={12} className='forgot_wrapper'>
                    <Grid item md={3}></Grid>
                    <Grid item md={6}>
                        <Card className='forgotCard'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography variant='h5' style={{margin: '20px 0'}}>
                                    Forgot password
                                </Typography>
                                <Typography variant='subtitle1' style={{margin: '10px 0'}}>
                                Please check your email inbox and click on the link to reset your password
                                </Typography>

                                <div>
                                    <input 
                                        name="email" 
                                        ref={register({ required: true , pattern: /\S+@\S+\.\S+/ })} 
                                        className='authInput'
                                        placeholder='Enter Your Email'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.email && "Please Enter a valid email"}
                                    </Typography>
                                </div>
                                <Button 
                                    variant='contained' 
                                    color='primary' 
                                    type="submit"
                                    className='authButton'
                                > 
                                    Sign In
                                </Button>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ForgotPassword;