import LeadsRepository from "../../storage/LeadsRepository";


export default function updateStatusLeadService( id ){
  const repository = new LeadsRepository();
  const lead = repository.findById(id);
  if (lead.status < 3 ){
    lead.status++
    repository.update(id, lead)    
  }
}

