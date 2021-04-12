import React from 'react';
import ReactDOM from 'react-dom';
import './p4.css';
import States from './components/states/States';
import Example from './components/example/Example';

class ProblemFour extends React.Component {
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
            <div>
                {this.state.didClick ? <div>
                    <div className="button-container">
                        <button onClick={this.handleClick}>Switch to States</button>
                    </div>
                    <Example />
                </div> : <div>
                    <div className="button-container">
                        <button onClick={this.handleClick}>Switch to Example</button>
                    </div>
                    <States />
                </div>}
            </div>
        )
    }
}
ReactDOM.render(<ProblemFour />, document.getElementById('reactapp'));