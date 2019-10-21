import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import { creators as authActions } from '../../../../store/ducks/auth'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles as commonStyles } from '../../../../assets/css'

import { Formik } from 'formik';
import * as Yup from 'yup';

const Signin = (props) => {

  handleInputChange = (formikProps, v, field) => {
    const { user } = props.auth
    user[field] = v
    formikProps.setFieldValue(field, v)
    props.user(user)
  }

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('Preencha o campo de e-mail'),
    password: Yup.string()
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
      .required('Preencha o campo de senha'),
  })    

    return (
        <Formik 
          initialValues={{ 
                          email: props.auth.user.email, 
                          password: props.auth.user.password
                        }}
          validationSchema={formSchema}
          enableReinitialize={true}
        >
          {formikProps => (
            <View style={commonStyles.container}>
              <View>
                <View style={commonStyles.sectionHeaderContainer}>
                  <Icon name="arrow-circle-right" 
                        size={23} />
                  <Text style={commonStyles.sectionHeaderText}>Login</Text>
                </View>
              </View>
              <View>
                <View style={commonStyles.formGroup}>
                  <Text style={commonStyles.label}>Email</Text>
                  <TextInput
                    keyboardType='email-address'
                    style={[commonStyles.input, formikProps.errors.email && commonStyles.inputError]}
                    placeholder="Digite seu email"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={props.auth.user.email}
                    onChangeText={v => this.handleInputChange(formikProps, v, 'email')}/>         
                    {formikProps.errors.email && <Text style={commonStyles.redText}>{formikProps.errors.email}</Text>}   
                </View>
                
                <View style={commonStyles.formGroup}>
                  <Text style={commonStyles.label}>Senha</Text>
                  <TextInput
                    style={[commonStyles.input, formikProps.errors.password && commonStyles.inputError]}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    value={props.auth.user.password}
                    onChangeText={(v) => this.handleInputChange(formikProps, v, 'password')}/>  
                    {formikProps.errors.password && <Text style={commonStyles.redText}>{formikProps.errors.password}</Text>}           
                </View>
                <View style={commonStyles.formGroup}>
                  <TouchableOpacity 
                        style={[commonStyles.buttonPrimary, Object.keys(formikProps.errors).length && commonStyles.disabledButton]}
                        disabled={Object.keys(formikProps.errors).length}
                        key={'cadastrar'} 
                        onPress={() => props.signIn()}>
                        <Text style={commonStyles.whiteText}>Fazer login</Text>
                  </TouchableOpacity>            
                  <TouchableOpacity 
                        style={commonStyles.buttonPrimary}
                        key={'jacadastrado'} 
                        onPress={() => props.navigation.navigate("Signup")}>
                        <Text style={commonStyles.whiteText}>Não possuo cadastro</Text>
                  </TouchableOpacity>            
                </View>
              </View>
            </View> 
          )}        
        </Formik>
    );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch =>
bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
