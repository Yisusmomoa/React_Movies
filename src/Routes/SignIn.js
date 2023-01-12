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
        <ContainerForms>
            <ContainerSwitchs>
                <ButtonSwitch href='#' onClick={()=>setShowForm(true)}>Sign in</ButtonSwitch>
                <ButtonSwitch href='#' onClick={()=>setShowForm(false)}>Sign up</ButtonSwitch>
            </ContainerSwitchs> 
            
            {
                showForm?
                <ComponentSignIn/>
                :
                <ComponentSignUp/>
            }        
        </ContainerForms>
    )
}
const ContainerForms=styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:55%;
    height:60vh;
    margin:0 auto;
    border:1px solid black;
    margin-top:2rem;
    margin-bottom:2rem;
    background-color:#ECECEC;
`
const ContainerSwitchs=styled.div`
    display:flex;
    width:40%;
    height:auto;
    align-items: center;
    margin-top:0.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom:0.5rem;
`
const ButtonSwitch=styled.a`
background-color: #D9D9D9; /* Green */
  border: none;
  color: black;
  padding: 5px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius:1px;
    :focus{
        background-color:#FFFFFF;
        box-shadow:rgba(0, 1, 0, 0.5) 0px 3px;
    }
`


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
            <FormSign onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign up</h3>
                <FormInput type='email' placeholder='email' 
                    name='email' {...register("email", {required:true})}/>
                {errors.name&&<span>This field is required</span>}
                
                <FormInput type='text' placeholder='username' 
                    name='username' {...register("username", {required:true})}/>
                {errors.name&&<span>This field is required</span>}

                <FormInput type='password' placeholder='password' 
                    name='password' {...register("password", {required:true})}/>
                {errors.name&&<span>This field is required</span>}
                
                <FormInputSend type='submit' value='Sign Up'/>
            </FormSign>
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
        <FormSign onSubmit={handleSubmit(onSubmit)}>
            <h3>Sign in</h3>
            <FormInput type='email' placeholder='email' 
            name='email' {...register("email", {required:true})}/>
            {errors.name&&<span>This field is required</span>}

            <FormInput type='password' placeholder='password' 
            name='password' {...register("password", {required:true})}/>
            {errors.name&&<span>This field is required</span>}
            
            <FormInputSend type='submit' value='Sign In'/>

        </FormSign>
    )
}
const FormSign=styled.form`
    display:flex;
    flex-direction:column;
    width:75%;
    height:100%;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    margin: auto 0;
`



const FormInput=styled.input`
/* padding: 15px 45px; */
text-align: left;
width:75%; height:12%;

border-radius:5px;
border:0.1px solid black;
`
const FormInputSend=styled.input`
 background-color: #D9D9D9; /* Green */
  border: none;
  color: black;
  width:75%; height:12%;
  text-align: center;
  border-radius:5px;
  font-size: 24px;
  cursor:pointer;
  :hover{
    background-color:#FFFFFF;
  }
`

