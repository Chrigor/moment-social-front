import React, { MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AllActions from '../../redux/actions';
import { useDispatch } from "react-redux";
import { FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Container, Form } from './styles';

const ActiveAccount: React.FC = () => {

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
          <h1>Ative sua conta</h1>

          <Form onSubmit={handleSignUp}>
            <div className="wrapper-input">
              <FiUser />
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="wrapper-input">
              <FiLock />
              <input type="text" id="token" name="yoken" placeholder="Token" required />
            </div>
            <button type="submit">Active</button>
          </Form>

          <div className="more">
            <Link to="/signin">
             Já possui uma conta ativa?
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default ActiveAccount;