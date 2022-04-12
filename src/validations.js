 import * as Yup from 'yup';
 
 const LoginSchema = Yup.object().shape({
   login: Yup.string()
     .min(4, 'Login não pode ser inferior a 4 caracteres')
     .required('Campo Obrigatório'),
   senha: Yup.string()
     .min(8, 'Senha não pode ser inferior a 8 caracteres')
     .required('Campo Obrigatório'),
   confirmarSenha: Yup.string().required('Required'),
 });