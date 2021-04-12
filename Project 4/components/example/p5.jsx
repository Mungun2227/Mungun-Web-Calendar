import React from 'react';
import ReactDOM from 'react-dom';
import './p4.css';
import States from './components/states/States';
import Example from './components/example/Example';
import { Route, Link, HashRouter } from 'react-router-dom';

class ProblemFive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            didClick: false,
        }
    }
    handleClick = () => {
        this.setState({didClick: !this.state.didClick}, () => {
            console.log(this.state.didClick);
        });
    }
    render () {
        return (
            <HashRouter>
                <div>
                    <div className="button-container">
                        <Link to="/states">
                            <button onClick={this.handleClick}>Go to States</button>
                        </Link>
                        <Link to="example">
                            <button onClick={this.handleClick}>Go to Example</button>
                        </Link>
                    </div>
                    <Route path="/states" component={States}/>
                    <Route path="/example" component={Example}/>
                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<ProblemFive />, document.getElementById('reactapp'));