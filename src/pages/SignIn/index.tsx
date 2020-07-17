import React, { MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AllActions from '../../redux/actions';
import { useDispatch } from "react-redux";
import { FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Container, Form } from './styles';

const SignIn: React.FC = () => {

  const dispatch = useDispatch();

  function handleSignUp(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log("Submit form");
    // handleClick();
  }

  return (
    <Container>

      <section>

        <div className="imageBackground">
        </div>

        <div className="content">
          <h1>Login</h1>

          <Form onSubmit={handleSignUp}>
            <div className="wrapper-input">
              <FiUser />
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="wrapper-input">
              <FiLock />
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit">Sign Inn</button>
          </Form>

          <div className="more">
            <Link to="/signup">
             Não possui uma conta?
            </Link>

            <Link to="/activeAccount">
              Já possui uma conta e quer ativa-lá?
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default SignIn;