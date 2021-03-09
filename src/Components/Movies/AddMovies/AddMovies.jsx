import React from 'react';
import NavMenu from '../../Share/NavMenu/NavMenu';
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';

const AddMovies = () => {
    const { register, handleSubmit , errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <NavMenu />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input ref={register} type="file" name="picture" />
                <Button variant='contained' color='primary' type='submit'>
                    Submit
                </Button>
            </form>
            
        </div>
    );
};

export default AddMovies;