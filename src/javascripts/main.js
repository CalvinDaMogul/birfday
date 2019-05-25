import firebase from 'firebase/app';

import 'bootstrap';
import '../styles/main.scss';
import auth from '../components/Auth/auth';
import birfday from '../components/Birfday/birfday';
import navBar from '../components/myNavbar/myNavbar';
import authData from './data/authData';

import apiKeys from './helpers/apiKeys.json';

console.error('hi');


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authStringBuilder();
  authData.checkLoginStatus();
  navBar.navbarEvents();
  birfday.birfdayStringBuilder();
};

init();
