import React from 'react';
import { SignIn } from '../SignIn/SignIn';
import { Route } from 'react-router-dom'
import './App.scss';
import { SignUp } from '../SignUp/SignUp';
import { ForgotPassword } from '../ForgotPassword/ForgotPassword';
import { Dialogs } from '../Dialogs/Dialogs';

export const App = () => {
  return (
    <>
      <Route exact path='/' render={() => <SignIn/>} />
      <Route path="/sign-up" render={() => <SignUp/>} />
      <Route path="/forgot-password" render={() => <ForgotPassword/>} />
      <Route path='/dialogs' render={() => <Dialogs/>} />
    </>
  )
}


