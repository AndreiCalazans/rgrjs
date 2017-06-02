import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import API from './api';
import Relay from 'react-relay';

class App extends React.Component {

    componentDidMount() {
         API.fetchLinks()
    }

    render() {
        return (
            <div>
                <Main></Main>
            </div>
        )
    };
};


console.log(
    Relay.QL`{
       query Test {
            links {}
       }
    }`
)


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)