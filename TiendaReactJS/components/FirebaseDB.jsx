import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

  const totalUsers : Object = [];
  const config = {
    apiKey: "AIzaSyA_98aYqdARxgV5J65I2RIeITNaxnxAZjI",
    authDomain: "tienda-96fcc.firebaseapp.com",
    databaseURL: "https://tienda-96fcc.firebaseio.com",
    storageBucket: "tienda-96fcc.appspot.com",
    messagingSenderId: "126238088131",
    appId: "1:126238088131:web:3044fe70ddf1cb5cbd3b76"
  };
  firebase.initializeApp(config);

const productosDb = firebase.database().ref().child('productos')
const usuariosDb = firebase.database().ref().child('usuarios')

usuariosDb.orderByChild("id").on("child_added", function(snapshot) {
  totalUsers.push(snapshot.key)
});
