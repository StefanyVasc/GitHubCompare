import React from 'react';

import logo from '../assets/logo.png';

const Main = () => (
  <div>
    <img src={logo} alt="GitHub Compare" />
    <form action="">
      <input type="text" name="usuário/repositório" />
      <button type="submit">Ok!</button>
    </form>
  </div>
);
export default Main;
