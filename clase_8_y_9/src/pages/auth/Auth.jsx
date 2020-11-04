import React, { useState } from 'react';
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import useForm from '../../hooks/useForm';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../utils/validators';

import './auth.css';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          email: {
            value: '',
            isValid: false,
          },
          password: {
            value: '',
            isValid: false,
          },
        },
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          nombre: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!formState.isValid) {
      return;
    }
    console.log(formState.inputs);
  };

  return (
    <>
      <Card className="authentication">
        <h2>Login</h2>
        <form onSubmit={onSubmitHandler}>
          {!isLoginMode && (
            <Input
              type="text"
              placeholder="LALALALALLALA"
              element="input"
              id="nombre"
              label="Nombre"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo Obligatorio PAPU!"
              onInput={inputHandler}
            />
          )}
          <Input
            type="email"
            element="input"
            id="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Ingresar un email!!!! NO ES TAN DIFICIL"
            onInput={inputHandler}
          />
          <Input
            type="password"
            element="input"
            id="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(8)]}
            errorText="Minimo 8 caracteres!!!! 😤 "
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'Login' : 'Signup'}
          </Button>
        </form>
        <Button inverted type="submit" onClick={switchModeHandler}>
          Switch A {isLoginMode ? 'Signup' : 'Login'}
        </Button>
      </Card>
    </>
  );
};

export default Auth;
