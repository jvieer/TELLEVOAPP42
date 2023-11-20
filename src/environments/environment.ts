export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export const environment: {
  production: boolean;
  apiURL: string;
  firebaseConfig: FirebaseConfig;
} = {
  production: false,
  apiURL: "http://localhost:3000",
  firebaseConfig: {
    apiKey: "AIzaSyDlD6_toOmaBAo63PU70noMVj22Ng8a1KE",
    authDomain: "tellevoapp7.firebaseapp.com",
    projectId: "tellevoapp7",
    storageBucket: "tellevoapp7.appspot.com",
    messagingSenderId: "828378589302",
    appId: "1:828378589302:web:3316d1337cf5e44b269757",
    measurementId: "G-2JBD391YWC"
  }
};
