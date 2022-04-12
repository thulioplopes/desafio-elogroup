import updateStatusLeadService from "./updateStatusLeadService";

import "./styles.css";

export default function Card({ label, id, onUpdate }) {
  function handleClick(){
    updateStatusLeadService(id);
    onUpdate();
  }
  return (
    <div className="lead-card">
      <span>{label}</span>
      <button type="button" onClick={handleClick} className="btn-advance-card">Avançar</button>
    </div>
  );
}