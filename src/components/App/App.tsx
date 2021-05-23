import React from 'react';
import { SignIn } from '../SignIn/SignIn';
import { Route } from 'react-router-dom'
import './App.scss';
import { SignUp } from '../SignUp/SignUp';

export const App = () => {
  return (
    <>
      <Route exact path='/' render={() => <SignIn/>} />
      <Route path="/sign-up" render={() => <SignUp/>} />
    </>
  )
}


