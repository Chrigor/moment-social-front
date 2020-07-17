import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import AllActions from '../../redux/actions';
import { useDispatch } from "react-redux";
import { FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Container, Form } from './styles';

const Signup: React.FC = () => {

  const dispatch = useDispatch();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    let action = AllActions.UserActions.toggleTheme;
    dispatch(action());
  }

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

        <button onClick={handleClick}>Press</button>
      </section>
    </Container>
  );
}

export default Signup;