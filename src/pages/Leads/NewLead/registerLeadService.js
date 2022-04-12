import LeadsRepository from "../../../storage/LeadsRepository";


export default function registerLeadService(nome, telefone, email, oportunidades  ){
  const lead = {nome, telefone, email, oportunidades, status:1, id: new Date().getTime()}
  const repository = new LeadsRepository();
  repository.register( lead );
  return lead;
}
