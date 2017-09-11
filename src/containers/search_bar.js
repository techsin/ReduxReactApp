import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onInputChange = (event) => {
        let term = event.target.value;
        this.setState({ term });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input
                    className='form-control'
                    placeholder='search for your favorite city'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn s-btn">
                    <button className="btn btn-secondary" type='submit'>Search</button>
                </span>
            </form>
        );
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);