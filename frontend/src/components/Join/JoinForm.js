import React from 'react';
import useJoinForm from './useJoinForm';
import JoinFormValidation from './JoinFromValidation';
import loadingIo from '../../assets/loadingio.svg';
import './JoinFrom.css';

const JoinForm = ({ socket, className }) => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    name,
    formError,
    submitting,
  } = useJoinForm(socket, JoinFormValidation);

  return (
    <div className={`joinContainer ${className}`}>
      <div className="joinInnerContainer">
        <h1 className="heading">Bem vindo ao nosso chat aberto!</h1>
        <h3 className="heading subtitle">Escolha seu nome de usuário antes de entrar.</h3>
        <form onSubmit={handleSubmit} className="joinForm">
          <input 
            placeholder="Digite um nome de usuário" 
            className="joinInput" 
            type="text" 
            value={name}
            onChange={handleChange} 
            onBlur={handleBlur}
            style={{ 'border-color': 'red' }}
          />
          <div className="error">{formError}</div>
          <div className="submitContainer">
            {submitting && <img alt="loaging..." src={loadingIo} />}
            <button type="submit" className="" disabled={submitting} style={{}}>
                Acessar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinForm;
