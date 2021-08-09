import React from "react";

class Search extends React.Component {
    state = {
        search: ''
    }

    handleSearch = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" value={this.state.search}
                       onChange={(e) => this.setState({search: e.target.value})}
                       onKeyDown={this.handleSearch}
                />
            </div>
        )
    }
}

export {Search}