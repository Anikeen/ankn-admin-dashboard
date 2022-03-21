import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

import './assets/fonts/style.css';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

import { firebaseConfig } from './.env.js';
import { IUser } from './types/user';

initializeApp(firebaseConfig);

const auth = getAuth();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const db = getDatabase();
    const userRef = ref(db, `/users/${user.uid}`);

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      renderApp(true, data);
    });

  } else {
    renderApp(false, {} as IUser);
  }
});

const renderApp = (isAuth: boolean, user: IUser) => {
  ReactDOM.render(
    <Router>
      <App auth={auth} isAuthed={isAuth} user={user} />
    </Router>,
    document.getElementById('root')
  );
}