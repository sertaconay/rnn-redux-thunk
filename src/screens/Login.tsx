import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { logUserIn } from '../state/actions';
import { navigationHome } from '../navigations';

const LoginScreen: FC = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const validations = Yup.object().shape({
    username: Yup.string().required('bu alan zorunlu'),
    password: Yup.string()
      .min(4, 'minimum 4 karakter girmelisiniz')
      .required('bu alan zorunlu'),
  });

  const handleFormSubmit = () => {
    dispatch(logUserIn({ email: 'burakhamza@mail.ru', password: 'test' }));
  };

  useEffect(() => {
    if (user.data.token) {
      navigationHome();
    }
  }, [user]);

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          username: 'burakhamza@mail.ru',
          password: 'test',
        }}
        onSubmit={handleFormSubmit}
        validationSchema={validations}
      >
        {({ values, handleChange, handleSubmit }) => (
          <View style={{ padding: 10 }}>
            <View>
              <TextInput
                value="burakhamza@mail.ru"
                onChangeText={handleChange('username')}
                placeholder="Kullanıcı Adı"
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Parola"
                autoCapitalize="none"
              />
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{ marginTop: 10, backgroundColor: 'green' }}
            >
              <Text>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;
