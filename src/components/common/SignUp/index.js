import React from 'react';
import Container from '../Container';
import Input from '../Input';
import CustomButton from '../CustomButton';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { LOGIN } from '../../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';

const SignUpComponent = ({ form, errors, onChange, onSubmit }) => {
  const { userName, firstName, lastName, email, password } = form;
  const { navigate } = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to Ping Me!</Text>
        <Text style={styles.subTitle}>Sign Up</Text>
        <View style={styles.form}>
          <Input
            onChangeText={value => onChange({ name: 'userName', value })}
            label="User Name"
            placeholder={'Enter User Name'}
            error={errors.userName}
          />
          <Input
            onChangeText={value => onChange({ name: 'firstName', value })}
            label="First Name"
            placeholder={'Enter First Name'}
            error={errors.firstName}
          />
          <Input
            onChangeText={value => onChange({ name: 'lastName', value })}
            label="Last Name"
            placeholder={'Enter Last Name'}
            error={errors.lastName}
          />

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
            // icon={<Text>{hidePwd ? 'SHOW' : 'HIDE'}</Text>}
            iconPosition="right"
            // hideText={hidePwd}
            // setHideText={setHidePwd}
            error={errors.password}
          />
          <CustomButton
            title="Submit"
            loading={false}
            disabled={
              !userName || !firstName || !lastName || !email || !password
            }
            variant={'primary'}
            onPress={onSubmit}
          />
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.footerText}>Already have an account? </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.footerLinkText}>Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignUpComponent;
