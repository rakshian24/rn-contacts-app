import React, { useState } from 'react';
import Container from '../Container';
import Input from '../Input';
import CustomButton from '../CustomButton';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SIGN_UP } from '../../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome Back to Ping Me!</Text>
        <Text style={styles.subTitle}>Sign In</Text>
        <View style={styles.form}>
          <Input
            // onChangeText={text => onUserNameChange(text)}
            // value={userName}
            label="Username"
            placeholder={'Enter Username'}
            error={'Username is required'}
          />

          <Input
            // onChangeText={text => onPasswordChange(text)}
            // value={password}
            label="Password"
            placeholder={'Enter Password'}
            // icon={<Text>{hidePwd ? 'SHOW' : 'HIDE'}</Text>}
            iconPosition="right"
            // hideText={hidePwd}
            // setHideText={setHidePwd}
          />
          <CustomButton
            title="Submit"
            loading={false}
            disabled={true}
            variant={'primary'}
          />
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerText}>New to Ping Me? </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate(SIGN_UP)}>
              <Text style={styles.footerLinkText}>Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Login;
