import React from 'react';

class Filter extends React.Component {
    state = {
        radio: 'all'
    }

    handleChange = (e) => {
        this.setState(() => ({[e.target.name]: e.target.value}), () => {
            this.props.handleFilter(this.state.radio);
        })
    }

    render() {
        return (
            <div className="filter">
                <label>
                    <span>All</span>
                    <input type="radio" name="radio" value="all" onChange={this.handleChange}
                           checked={this.state.radio === "all"}/>
                </label>
                <label>
                    <span>Movie</span>
                    <input type="radio" name="radio" value="movie" onChange={this.handleChange}
                           checked={this.state.radio === "movie"}/>
                </label>
                <label>
                    <span>Serial</span>
                    <input type="radio" name="radio" value="series" onChange={this.handleChange}
                           checked={this.state.radio === "series"}/>
                </label>
            </div>
        );
    }
}

export default Filter;
