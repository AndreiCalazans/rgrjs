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
//### UNCOMMENT TO THE CONSOLE.LOG TO SEE ERROR!!!!!!
// basic example on using Relay.QL
// console.log(
//     Relay.QL`{
//        query Test {
//             links {}
//        }
//     }`
// )


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)