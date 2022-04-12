import UsersRepository from "../../storage/UsersRepository";

export default function registerUserService( login, senha ){
  const user = { login, senha, id:new Date().getTime() };
  const repository = new UsersRepository();
  repository.register( user );

  return user;
}
