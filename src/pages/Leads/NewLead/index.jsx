import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import registerLeadService from "./registerLeadService";

import Header from "../../../components/Header";
import Input from "../../../components/Form/Input";
import Checkbox from "../../../components/Form/Checkbox";

import "./styles.css";

const OPORTUNITIES = [
  { value: 'RPA', label: 'RPA' },
  { value: 'Produto Digital', label: 'Produto Digital' },
  { value: 'Analytics', label: 'Analytics' },
  { value: 'BPM', label: 'BPM' }
];

export default function NewLead(){

  const navigate = useNavigate();

  const [ oportunitiesChecked, setOportunitiesChecked ] = useState( [] );

  const formOptions = { resolver: yupResolver(
    Yup.object().shape({
      nome: Yup.string().required( 'Nome Obrigatório' ),
      telefone: Yup.string().required( 'Telefone Obrigatório' ),
      email: Yup.string().required( 'Email Obrigatório' ),
      oportunidades: Yup.array().required('Selecione ao menos uma oportunidade')
    })
  )};

  const { register, handleSubmit, formState: { errors } } = useForm( formOptions );
  const onSubmit = ( fields ) => {
    console.log(fields)
    registerLeadService(fields.nome, fields.telefone, fields.email, fields.oportunidades)
    alert('Lead incluído com sucesso')
    navigate ("/leads")
  }

  const handleCheckAll = ( event ) => {
    const checked = event.target.checked;
    if( !checked ){
      setOportunitiesChecked( [] );
    } else {
      setOportunitiesChecked( OPORTUNITIES.map( oportunity => oportunity.value ) );
    }
  }

  const handleCheckboxClick = ( event ) => {
    const checked = event.target.checked;
    const value   = event.target.value;
    if( checked ){
      setOportunitiesChecked( [].concat( oportunitiesChecked, value ) );
    } else {
      setOportunitiesChecked( prev => prev.filter( oportunity => oportunity !== value ) );
    }
  }

  return(
    <>
    <Header />
    <div className="header-new-lead">
      <div className="div-wid-50">
      </div>
      <div className="div-wid-50">  
        <h1 className="panel-title-new-lead">Novo Lead</h1>
      </div>  
    </div>

      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="div-wid-50">
          <div className="div-inputs-new-lead">
            <Input type="text" label="Nome *"  {...register('nome')} />
            {errors.nome && <span className="span-required" role="alert">{errors.nome.message}</span>}
            <Input type="text" label="Telefone *"  {...register('telefone')} />
            {errors.telefone && <span className="span-required" role="alert">{errors.telefone.message}</span>}
            <Input type="text" label="Email *"  {...register('email')} />
            {errors.email && <span className="span-required" role="alert">{errors.email.message}</span>}
          </div>
        </div>

        <div className="div-wid-50">
          <h3 className="oportunidades-title">Oportunidades *</h3>
          <table className="table-oportunidades">
            <tr>
              <th className="padding-table header-oportunidades"><Checkbox onClick={handleCheckAll} checked={oportunitiesChecked.length > 0} /></th>
              <th className="header-oportunidades col-2"></th>
            </tr>
            {OPORTUNITIES.map( (oportunity, index) => (
              <tr key={index} className="line">
                <td className="padding-table"><Checkbox value={oportunity.value} {...register('oportunidades[]')} checked={oportunitiesChecked.includes( oportunity.value )} onClick={handleCheckboxClick} /></td>
                <td>{oportunity.label}</td>
              </tr>
            ))}
          </table>
          <button type="submit" className="btn-save-lead">Salvar</button>
        </div>
      </form>  
    </>  
  )
}