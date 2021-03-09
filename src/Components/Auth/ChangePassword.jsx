import { Button, Container, Grid, Typography } from '@material-ui/core';
import React , {useRef} from 'react';
import { useForm } from "react-hook-form";
import {Card} from 'ui-glassmorphism';
import 'ui-glassmorphism/dist/index.css';
import './ForgotPassword.scss'

const ChangePassword = () => {
    const { register, errors, handleSubmit , watch} = useForm();
    const newPassword = useRef({});
    newPassword.current = watch("newPassword", "");

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
                                Reset your Account Password ?
                                </Typography>
                                
                                <div>
                                    <Typography variant='subtitle1'>
                                        Old password
                                    </Typography>
                                    <input 
                                        name="oldPassword" 
                                        type='password'
                                        ref={register({ required: true, minLength: 8 })} 
                                        className='authInput'
                                        placeholder='Enter Your Old Password'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.oldPassword && "Please Enter maximun 8 number"}
                                    </Typography>

                                    <Typography variant='subtitle1'>
                                        New password
                                    </Typography>
                                    <input 
                                        name="newPassword" 
                                        type='password'
                                        ref={register({ required: true, minLength: 8 })} 
                                        className='authInput'
                                        placeholder='Enter Your New Password'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.newPassword && "Please Enter maximun 8 number"}
                                    </Typography>

                                    <Typography variant='subtitle1'>
                                        Conform Password
                                    </Typography>
                                    <input 
                                        name="conformPassword" 
                                        type='password'
                                        ref={register({
                                            validate: value =>
                                              value === newPassword.current || "The passwords do not match"
                                          })}
                                        className='authInput'
                                        placeholder='Enter Your Conform Password'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.conformPassword && "Don't match password"}
                                    </Typography>
                                </div>
                                <Button 
                                    variant='contained' 
                                    color='primary' 
                                    type="submit"
                                    className='authButton'
                                > 
                                    Update Now
                                </Button>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ChangePassword;