import Storage from "../utils/Storage";

export default class LeadsRepository {

  constructor(){  
    const leadsStorage = Storage.get( "leads" );
    this.leads = ( leadsStorage ) ? leadsStorage : [];
  }

  register( leed ){
    this.leads.push( leed );
    Storage.set( "leads", this.leads );
    return true;
  }

  findById( id ){
    const leads = this.leads.find( lead => lead.id === id );
    return ( leads ) ? leads : null;
  }
  
  update( id, lead ){
    this.leads = this.leads.map( _lead => {
      return ( _lead.id === id) ? {..._lead, ...lead} : _lead
    })
    Storage.set( "leads", this.leads );
  }
  getAll(){
    return this.leads;
  }
}
