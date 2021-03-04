import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import firebase from "firebase";

// Firebaseの初期化
var firebaseConfig = {
  apiKey: "AIzaSyA_H5L6TbdgmL_6RqyY0eS3keXx3hBUr70",
  authDomain: "misa0-react.firebaseapp.com",
  databaseURL: "https://misa0-react-default-rtdb.firebaseio.com",
  projectId: "misa0-react",
  storageBucket: "misa0-react.appspot.com",
  messagingSenderId: "526510535818",
  appId: "1:526510535818:web:75c7f1ffe1a24c7049e973",
  measurementId: "G-NF8CKFE9RQ"
};

var fireapp;
try {
  fireapp = firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.log(error.message);
}
export default fireapp;

// ステートの初期値
const initial = {
  login:false,
  username:'(click here!)',
  email:'',
  data:[],
  items:[]
}

// レデューサー
function fireReducer(state = intitial, action) {
  switch (action.type) {
// UPDATE_USERアクションは、送信された値でストアの内容を更新するもの。
    case 'UPDATE_USER':
      return action.value;
    // デフォルト
    default:
      return state;
  }
}

// initStore関数
export function initStore(state = initial) {
  return createStore(fireReducer, state,
     applyMiddleware(thunkMiddleware))
}