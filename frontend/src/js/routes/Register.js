import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import RegistrationForm from '../components/forms/RegistrationForm';

export default class Register extends Component {
  isLoggedIn() {
    return (
      localStorage.getItem('email') &&
      localStorage.getItem('username') &&
      localStorage.getItem('id') &&
      localStorage.getItem('token')
    );
  }

  render() {
    if (this.isLoggedIn()) {
      return (<Redirect to="/" />);
    } else {
      return (
        <div>
          <Layout active_link={this.props.children} />
          <RegistrationForm />
        </div>
      );
    }
  }
}