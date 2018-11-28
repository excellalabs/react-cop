import React, {Component} from 'react';
import './App.css';
import { decisionMaker } from './decisionMaker';
import { LocaleContext } from './context';

class FormC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Newton',
            lastName: 'Smells',
            applied: false,
            status: '',
            width: window.innerWidth
        }

    }

    componentDidMount() {
        document.title = this.state.firstName + "'s Application";
        window.addEventListener('resize', this.handleResize);
    };

    componentDidUpdate() {
        document.title = this.state.firstName + "'s Application";
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        });
    };

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        });
    };

    apply = () => {
        this.setState({
            applied: true,
            status: decisionMaker()
        })
    };

    reset = () => {
        this.setState({
            firstName: '',
            lastName: '',
            applied: false,
            status: ''
        })
    };

    render() {
        if (this.state.applied) {
            return (
                <section>
                    <h1>Application Status:</h1>
                    <h2>{this.state.firstName} {this.state.astName} was {this.state.status}</h2>

                    <button onClick={this.reset}>
                        Reset
                    </button>
                    <LocaleContext.Consumer>
                        {localeVal => localeVal.locale}
                    </LocaleContext.Consumer>
                    {this.state.width}
                </section>
            )
        }
        return (
            <section>
                <h1>Excella Application</h1>
                <div>
                    <input
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                    />
                </div>
                <div>
                    <input
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                    />
                </div>
                <button onClick={this.apply}>
                    Apply
                </button>
            </section>
        );
    }
}

export default FormC;