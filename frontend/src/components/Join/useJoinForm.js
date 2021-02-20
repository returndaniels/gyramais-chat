import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../state/auth/authActions';

function useJoinForm(socket, validate) {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [name, setName] = useState('');
  const [formError, setFormError] = useState(error?.detail);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting && isLoading === false) {
      if (!formError) {
        dispatch(signIn({ name, islogged: true }, socket));
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [formError, name, isSubmitting, isLoading, socket, dispatch]);

  useEffect(() => { 
    setFormError(error?.detail);
  },[error]);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleBlur() {
    const validationErrors = validate(name);
    setFormError(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(name);
    setFormError(validationErrors);
    setIsSubmitting(true);
  }

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    name,
    formError,
    submitting: isSubmitting || isLoading,
  };
}

export default useJoinForm;