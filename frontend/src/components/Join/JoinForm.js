import React from 'react';
import useJoinForm from './useJoinForm';
import JoinFormValidation from './JoinFromValidation';
import './JoinFrom.css';

const JoinForm = ({ socket }) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    name,
    //errors,
    submitting,
  } = useJoinForm(socket, JoinFormValidation);

  return (
    <div className="joinContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Bem vindo ao nosso chat aberto!</h1>
        <form onSubmit={handleSubmit} className="">
          <input 
            placeholder="Digite um nome de usuário" 
            className="joinInput" 
            type="text" 
            value={name}
            onChange={handleChange} 
            onBlur={handleBlur}
          />
          <button type="submit" className="" disabled={submitting} style={{}}>
              Acessar
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinForm;
