import React from "react";
import {Movies} from "./Movies";
import {Search} from "./Search";
import Filter from "./Filter";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY, 'API_KEY')

class Main extends React.Component {
    state = {
        movies: [],
        type: "all",
        searchStr: "",
        loading: true
    }


    componentDidMount() {
        fetch(`http://www.omdbapi.com/?s=matrix&apikey=${API_KEY}`).then((res) => res.json()).then(res => {
            this.setState({movies: res.Search, loading: false});
        })
    }

    searchMovies = (str) => {
        this.setState({searchStr: str, loading: true});
        if (this.state.type === "all") {
            fetch(`http://www.omdbapi.com/?s=${str}&apikey=${API_KEY}`).then((res) => res.json()).then(res => {
                this.setState({movies: res.Search, loading: false});
            })
        } else {
            fetch(`http://www.omdbapi.com/?s=${str}&type=${this.state.type}&apikey=${API_KEY}`).then((res) => res.json()).then(res => {
                this.setState({movies: res.Search, loading: false});
            })
        }
    }

    handleFilter = (filterType) => {
        this.setState(() => ({type: filterType}), () => {
            this.searchMovies(this.state.searchStr)
        })
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="search">
                        <Search searchMovies={this.searchMovies}/>
                    </div>
                    <Filter handleFilter={this.handleFilter}/>
                    {this.state.loading ? (<h2>Loading...</h2>) : <Movies movies={this.state.movies}/>}
                </div>
            </main>
        )
    }
}

export {Main}