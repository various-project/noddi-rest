import firebase from 'firebase';

const Environment = require('./environment.js');

const firebaseConfig = {
  apiKey: Environment.API_KEY,
  authDomain: Environment.AUTH_DOMAIN,
  databaseURL: Environment.DATABASE_URL,
  projectId: Environment.PROJECT_ID,
  storageBucket: Environment.STORAGE_BUCKET,
  messagingSenderId: Environment.MESSAGING_SENDER_ID,
  appId: Environment.APP_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export { db as default };
