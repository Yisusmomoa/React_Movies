import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { RegisterAction } from '../actions/RegisterAction'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'


export const SignIn = () => {
    
    const [showForm, setShowForm] = useState(true);
    
    return (
        <>
            <ButtonSignIn href='#' onClick={()=>setShowForm(true)}>Sign in</ButtonSignIn>
            <ButtonSignUp href='#' onClick={()=>setShowForm(false)}>Sign up</ButtonSignUp>
            {
                showForm?
                <ComponentSignIn/>
                :
                <ComponentSignUp/>
            }        
        </>
    )
}

//  sign up 
function ComponentSignUp() {
    /*
    register nos permitirá incluirla en todo elemento que queramos 
    observar de nuestro formulario, ya que será la única 
    vía por la cual la librería sepa obtener los cambios que se produzcan en cada campo. 
    De momento ya nos podemos olvidar de nuestra función auxiliar handleChange previamente 
    definida que nos permitía almacenar en un estado interno las actualizaciones derivadas de cada elemento.
    */
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    /*
    handleSubmit se encargará de recopilar por nosotros el conjunto de valores finales producidos
    en cada elemento del formulario para enviarlos donde queramos mediante un único objeto similar 
    al que previamente definimos como userInfo empleando un estado interno de React.
    */
    const onSubmit = async (userInfo) => {
        Swal.fire({
            icon: 'info',
            title: 'Loading...',
            didOpen: () =>{
              Swal.showLoading();
            }
        })
        if (await RegisterAction(userInfo)) {
            Swal.fire({
                icon: 'success',
                title: 'successfully registered '
            }).then(()=>navigate("/home"))
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error'
            })
        }
    }
    
    return (
            <FormSignUp onSubmit={handleSubmit(onSubmit)}>
                <input type='email' placeholder='email' 
                    name='email' {...register("email", {required:true})}/>
                {errors.name&&<span>This field is required</span>}
                
                <input type='text' placeholder='username' 
                    name='username' {...register("username", {required:true})}/>
                {errors.name&&<span>This field is required</span>}

                <input type='password' placeholder='password' 
                    name='password' {...register("password", {required:true})}/>
                {errors.name&&<span>This field is required</span>}
                
                <input type='submit'/>
            </FormSignUp>
    )
}

// sign in 
function ComponentSignIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const {login}=useContext(UserContext)
    const onSubmit=async (userInfo)=>{
        Swal.fire({
            icon: 'info',
            title: 'Loading...',
            didOpen: () =>{
              Swal.showLoading();
            }
        })
        if (await login(userInfo)) {
            Swal.fire({
                icon: 'success',
                title: 'Welcome'
            }).then(()=>navigate("/"))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Error'
            })
        }
    }
    return (
        <FormSignIn onSubmit={handleSubmit(onSubmit)}>
            
            <input type='email' placeholder='email' 
            name='email' {...register("email", {required:true})}/>
            {errors.name&&<span>This field is required</span>}

            <input type='password' placeholder='password' 
            name='password' {...register("password", {required:true})}/>
            {errors.name&&<span>This field is required</span>}
            
            <input type='submit'/>

        </FormSignIn>
    )
}

const ButtonSignIn=styled.a`
background-color:blue;
    :focus{
        background-color:red;
    }
`

const ButtonSignUp=styled.a`
background-color:blue;
    :focus{
        background-color:red;
    }
`

const FormSignUp=styled.form`
    display:flex;
    flex-direction:column;
    width:75%;
    align-items: center;

`

const FormSignIn=styled.form`
    display:flex;
    flex-direction:column;
    width:75%;
    align-items: center;
`