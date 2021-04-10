import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";
import Loading from './Loading';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, long: null, errorMessage: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
            err => this.setState({ errorMessge: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessge && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessge}
                </div>
            );
        }
        if (!this.state.errorMessge && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat} />
            );
        }
        return (
            <Loading message="Please Accept Location Request" />
        );
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));
