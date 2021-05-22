import React from 'react';
import { SignIn } from '../SignUp/SignIn';
import { Route } from 'react-router-dom'
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Route path='/' render={() => <SignIn/>} />
    </div>
  )
}


