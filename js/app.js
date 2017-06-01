import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

class App extends React.Component {
    render() {
        return (
            <div>
                <Main></Main>
            </div>
        )
    };
};



ReactDOM.render(
    <App/>,
    document.getElementById('root')
)