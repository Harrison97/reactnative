import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from'./Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDxOKjrTlnKoKsRBopC61M8TyDIoT3qYgs',
            authDomain: 'manager-8a24f.firebaseapp.com',
            databaseURL: 'https://manager-8a24f.firebaseio.com',
            projectId: 'manager-8a24f',
            storageBucket: 'manager-8a24f.appspot.com',
            messagingSenderId: '973997531960'
          };
          firebase.initializeApp(config);
    }


    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }

}

export default App;