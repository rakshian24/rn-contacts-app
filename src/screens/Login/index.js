import React, { useState } from 'react';

import LoginComponent from '../../components/common/Login';

const Login = () => {
  const [userName, onUserNameChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [hidePwd, setHidePwd] = useState(true);

  return <LoginComponent />;
};

export default Login;
