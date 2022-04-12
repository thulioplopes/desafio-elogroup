import LeadsRepository from "../../../storage/LeadsRepository";

export default function listLeadService(){
  const repository = new LeadsRepository();
  return repository.getAll();
}
