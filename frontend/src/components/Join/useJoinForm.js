import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../state/auth/authActions';

function useJoinForm(socket, validate) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting && isLoading === false) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        dispatch(signIn({ name, islogged: true }, socket));
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, name, isSubmitting, dispatch, isLoading, socket]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleBlur() {
    const validationErrors = validate(name);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(name);
    setErrors(validationErrors);
    setIsSubmitting(true);
  }

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    name,
    errors,
    submitting: isSubmitting || isLoading,
  };
}

export default useJoinForm;