import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { signIn, signInFailed } from "../../state/auth/authActions";

import * as constants from "../../api/constants";

function useJoinForm(validate) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const [name, setName] = useState('');
  const [formError, setFormError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [join] = useMutation(constants.JOIN_USER);

  useEffect(() => {
    if (isSubmitting && isLoading === false) {
      if (!formError) {
        join({ variables: { name } })
          .then(({ data }) => {
            dispatch(signIn({_id: data.join, name}))
          })
          .catch((error) => {
            dispatch(signInFailed(error));
          });

        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [formError, name, isSubmitting, isLoading, dispatch, join]);

  // useEffect(() => { 
  //   setFormError(error?.detail);
  // },[error]);

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