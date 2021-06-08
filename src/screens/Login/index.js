import React, { useState } from 'react';
import LoginComponent from '../../components/common/Login';
import isEmail from 'validator/lib/isEmail';
import { trim } from 'lodash';

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const getFieldName = fieldName => {
    if (fieldName === 'email') return 'Email';
    else if (fieldName === 'password') return 'Password';
  };

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: trim(value) });

    //Form Validation on Form Input Change
    if (value !== '') {
      if (name === 'password') {
        if (trim(value).length < 5) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'Password should be more than 5 characters',
            };
          });
        } else {
          setErrors(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      } else if (name === 'email') {
        console.log('isEmail = ', isEmail(value));
        if (!isEmail(trim(value))) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'Please enter a valid Email Address',
            };
          });
        } else {
          setErrors(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      } else {
        setErrors(prev => {
          return {
            ...prev,
            [name]: null,
          };
        });
      }
    } else {
      setErrors(prev => {
        return {
          ...prev,
          [name]: `${getFieldName(name)} is required`,
        };
      });
    }
  };

  const onSubmit = () => {
    console.log(`FormValue`, form);

    //Form Validation
    if (!form.email) {
      setErrors(prev => {
        return {
          ...prev,
          email: 'Email is required',
        };
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {
          ...prev,
          password: 'Password is required',
        };
      });
    }
  };

  return (
    <LoginComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
