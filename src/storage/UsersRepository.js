import Storage from "../utils/Storage";

export default class UsersRepository {

  constructor(){  
    const usersStorage = Storage.get( "users" );
    this.users = ( usersStorage ) ? usersStorage : [];
  }

  register( user ){
    if ( !this.find( user.login ) ){
      this.users.push( user );
      Storage.set( "users", this.users );
      return true;
    }

    return false;
  }

  find( login ){
    const user = this.users.find( user => user.login === login );
    return ( user ) ? user : null;
  }

  authenticate( login, senha ){
    const user = this.users.find( user => ( user.login === login && user.senha === senha ) );
    return ( user ) ? user : null;
  }

}
