import React, { useState } from 'react';
import Container from '../Container';
import Input from '../Input';
import CustomButton from '../CustomButton';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SIGN_UP } from '../../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';

const LoginComponent = ({ form, errors, onChange, onSubmit }) => {
  const { email, password } = form;
  const [hidePwd, setHidePwd] = useState(true);
  const { navigate } = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome back to Ping Me!</Text>
        <Text style={styles.subTitle}>Sign In</Text>
        <View style={styles.form}>
          <Input
            onChangeText={value => onChange({ name: 'email', value })}
            label="Email"
            placeholder={'Enter Email'}
            error={errors.email}
          />

          <Input
            onChangeText={value => onChange({ name: 'password', value })}
            label="Password"
            placeholder={'Enter Password'}
            icon={<Text>{hidePwd ? 'SHOW' : 'HIDE'}</Text>}
            iconPosition="right"
            hideText={hidePwd}
            setHideText={setHidePwd}
            error={errors.password}
          />
          <CustomButton
            title="Submit"
            loading={false}
            disabled={!email || !password}
            variant={'primary'}
            onPress={onSubmit}
          />
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerText}>New to Ping Me? </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate(SIGN_UP)}>
              <Text style={styles.footerLinkText}>Sign Up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
