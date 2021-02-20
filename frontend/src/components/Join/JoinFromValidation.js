export default function signInFormValidation(name) {
  var error = null;

  if (!name) {
    error = 'Forneça um nome de usuário';
  }

  return error;
}
