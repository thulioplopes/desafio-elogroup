import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Header from "../../../components/Header";
import listLeadService from './listLeadService';
import Card from '../../../components/Card';

import "./styles.css";

export default function PanelLead(){

  const [ leads, setLeads ] = useState([]);

  useEffect(() => {
    onCardChange()
  }, []);


  const onCardChange = () => {
    const list = listLeadService();
    setLeads( list );
  }
  return(
    <div className="container-panel">
      <Header />
      <header className="panel-heading">
        <h3 className="panel-title">Painel de Leads</h3>
      </header>
      <Link to={'/leads/register'} className="btn-lead">Novo Lead (+)</Link>
      <div className="table-container">
        <div className="table-col">
          <div className="table-col-header">Cliente em Potencial</div>
          {leads.filter (lead => lead.status === 1).map( (lead) => <Card onUpdate={onCardChange} key={lead.id} id={lead.id} label={lead.nome} /> )}
        </div>
        <div className="table-col">
          <div className="table-col-header">Dados Confirmados</div>
          {leads.filter (lead => lead.status === 2).map( (lead) => <Card onUpdate={onCardChange} key={lead.id} id={lead.id} label={lead.nome} /> )}
        </div>
        <div className="table-col">
          <div className="table-col-header">Reunião Agendada</div>
          {leads.filter (lead => lead.status === 3).map( (lead) => <Card onUpdate={onCardChange} key={lead.id} id={lead.id} label={lead.nome} /> )}
        </div>
      </div>
    </div> 
  )
}