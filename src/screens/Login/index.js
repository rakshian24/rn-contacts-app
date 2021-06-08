import React, { useState } from 'react';
import { Text } from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [userName, onUserNameChange] = useState('');
  const [password, onPasswordChange] = useState('');

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
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
