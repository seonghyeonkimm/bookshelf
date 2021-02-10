import '@reach/dialog/styles.css';

import Dialog from '@reach/dialog';
import * as React from "react";
import ReactDOM from "react-dom";

import { Logo } from './components/logo';

function App() {
  const [openModal, setOpenModal] = React.useState('none');

  const handleLoginSubmit = (formData) => {
    console.log({ formData });
  }

  const handleRegisterSubmit = (formData) => {
    console.log({ formData });
  }

  return (
    <div>
      <Logo title="Bookshelf" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog isOpen={openModal === 'login'} onDismiss={() => setOpenModal('none')}>
        <div>
          <button type="button" onClick={() => setOpenModal('none')}>close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={handleLoginSubmit} buttonText="Login" />
      </Dialog>
      <Dialog isOpen={openModal === 'register'} onDismiss={() => setOpenModal('none')}>
        <div>
          <button type="button" onClick={() => setOpenModal('none')}>close</button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={handleRegisterSubmit} buttonText="Register" />
      </Dialog>
    </div>
  );
}

function LoginForm({ onSubmit, buttonText }) {
  const handleSubmit = (e)  => {
    e.preventDefault();
    const { username, password } = e.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: <input type="text" name="username" /></label>
      </div>
      <div>
        <label>Password: <input type="password" name="password" /></label>
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
