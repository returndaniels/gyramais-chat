export default function signInFormValidation(name) {
  const errors = {};

  if (!name) {
    errors.detail = 'Usuário requerido';
  }

  return errors;
}
