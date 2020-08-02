import React, { useState } from 'react';
import Switch from 'react-switch';
import AllActions from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { Container } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  function handleChange() {
    setChecked(!checked);
    let toggleTheme = AllActions.UserActions.toggleTheme;
    dispatch(toggleTheme());
  }

  return (
    <Container>
      <Switch onChange={handleChange} checked={checked} onClick={handleChange} />
    </Container>
  );
}

export default Header;