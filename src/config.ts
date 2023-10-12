const { REACT_APP_API_KEY, REACT_APP_APP_ID } = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  appId: REACT_APP_APP_ID,
  authDomain: "local-socials.firebaseapp.com",
  projectId: "local-socials",
  storageBucket: "local-socials.appspot.com",
  messagingSenderId: "745187496238",
  measurementId: "G-QB25EQPLLT",
};

export default firebaseConfig;
