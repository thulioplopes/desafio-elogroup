import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Logo from "../../components/Logo"
import Input from '../../components/Form/Input'

import "./styles.css";
import registerUserService from './registerUserService';

export default function Login() {

  const navigate = useNavigate()

    const formOptions = { resolver: yupResolver(
    Yup.object().shape({
      usuario: Yup.string().required( 'Usuário obrigatório' ),
      senha: Yup.string().required( 'Senha obrigatória' ).min(8,"A senha deve ter no mínimo 8 caracteres").matches(/[A-Z]/, "É necessário conter ao menos uma letra maiúscula") .matches(/(?=.[@#$%!^&+=.+-])/, "É necessário conter um caracter especial") .matches(/(?=.[0-9])/, "É necessário conter ao menos um caracter numérico"),
      confirmasenha: Yup.string().oneOf([Yup.ref("senha"),null],"As senhas não são compatíveis")
    })
  )};
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm(formOptions);
  const onSubmit = (fields) => {
    console.log("login efetuado com sucesso")
    registerUserService(fields.usuario,fields.senha)
    navigate("/leads")
  }
  return (
      <div className="container flex-center">
        <div className="border-box">
          <div className="">
            <Logo height="150px" width="400px"/>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" label="Usuário *"  {...register('usuario')} />
            {errors.usuario && <span className="span-required" role="alert">{errors.usuario.message}</span>}
            <Input type="password" label="Senha *"  {...register('senha')}/>
            {errors.senha && <span className="span-required" role="alert">{errors.senha.message}</span>}
            <Input type="password" label="Confirmação de Senha *"  {...register('confirmasenha')}/>
            {errors.confirmasenha && <span className="span-required" role="alert">{errors.confirmasenha.message}</span>}
            <div className="flex-center div-btn">
              <button type="submit" className="btn-signup">Registrar</button>
            </div>
          </form>     
        </div>
      </div>
  );
}
  