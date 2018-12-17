import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCw8SwJjs4n0R6i6vIZyS_iFzn0CvgnFE8",
            authDomain: "auth-82a6e.firebaseapp.com",
            databaseURL: "https://auth-82a6e.firebaseio.com",
            projectId: "auth-82a6e",
            storageBucket: "auth-82a6e.appspot.com",
            messagingSenderId: "1037580468481"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                <CardSection>
                    return <Spinner size="large" />;
                </CardSection>
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View >
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
