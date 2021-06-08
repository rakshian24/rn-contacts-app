import React, { useState } from 'react';
import { Text } from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [userName, onUserNameChange] = useState('');
  const [password, onPasswordChange] = useState('');
  const [hidePwd, setHidePwd] = useState(true);

  return (
    <Container>
      <Input
        onChangeText={text => onUserNameChange(text)}
        value={userName}
        label="Username"
        error={'Username is required'}
      />

      <Input
        onChangeText={text => onPasswordChange(text)}
        value={password}
        label="Password"
        icon={<Text>{hidePwd ? 'SHOW' : 'HIDE'}</Text>}
        iconPosition="right"
        hideText={hidePwd}
        setHideText={setHidePwd}
      />
    </Container>
  );
};

export default Login;
