import React, { useState } from 'react';
import SignUpComponent from '../../components/common/SignUp';
import isEmail from 'validator/lib/isEmail';
import { trim } from 'lodash';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const getFieldName = fieldName => {
    if (fieldName === 'userName') return 'User Name';
    else if (fieldName === 'firstName') return 'First Name';
    else if (fieldName === 'lastName') return 'Last Name';
    else if (fieldName === 'email') return 'Email';
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
      } else if (name === 'userName') {
        if (trim(value).length < 4) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'User Name should be more than 3 characters',
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
      } else if (name === 'firstName') {
        if (trim(value).length < 4) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'First Name should be more than 3 characters',
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
    if (!form.userName) {
      setErrors(prev => {
        return {
          ...prev,
          userName: 'Username is required',
        };
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {
          ...prev,
          firstName: 'First Name is required',
        };
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {
          ...prev,
          lastName: 'Last Name is required',
        };
      });
    }
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
    <SignUpComponent
      form={form}
      errors={errors}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignUp;
