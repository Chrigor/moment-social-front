import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Container, Form } from './styles';

const Signup: React.FC = () => {

  const history = useHistory();

  function handleSignUp(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log("Submit form");
    // handleClick();
    history.push("/activeAccount");
  }

  return (
    <Container>

      <section>

        <div className="imageBackground">
        </div>

        <div className="content">
          <h1>Crie uma conta!</h1>

          <Form onSubmit={handleSignUp}>
            <div className="wrapper-input">
              <FiMail />
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="wrapper-input">
              <FiUser />
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="wrapper-input">
              <FiLock />
              <input type="password" id="password" name="passowd" placeholder="Password" required />
            </div>
            <button type="submit">Sign Up</button>
          </Form>

          <div className="more">
            <Link to="/signin">
              Já possui uma conta?
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

export default Signup;