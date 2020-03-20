import React, { useState, useEffect } from "react";
//import { moviesData } from "./moviesList";
import { ListItem } from "./components/listItem";
import { MovieTabs } from "./components/MovieTabs";

export default function App() {
  //url and key
  const API_URL = "https://api.themoviedb.org/3";

  const API_KEY = "3f4ca4f3a9750da53450646ced312397";
  //states
  let [watch, setWatch] = useState([]);
  let [movies, setMovies] = useState([]);
  let [sort, setSort] = useState("popularity.desc");
  //getting the data when loaded
  useEffect(() => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${sort}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      });
  }, [sort]);

  //add movie function
  let addMovie = movie => {
    setWatch([...watch, movie]);
  };
  //remove movie function
  let removeMovie = movie => {
    let updMovies = watch.filter(item => item !== movie);
    setWatch(updMovies);
  };
  //delete item function
  let deleteItem = movie => {
    let updMovies = movies.filter(item => item.id !== movie.id);
    setMovies(updMovies);
  };
  //change sorting
  let updSort = value => {
    setSort(value);
  };
  return (
    //the page structure
    <div className="container">
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-12 mb-4">
              {/* movie tabs */}
              <MovieTabs sort_by={sort} updSort={updSort} />
            </div>
          </div>
          <div className="row">
            {/* getting the lists of movies */}
            {movies.map(movie => (
              <div className="col-6 mb-4" key={movie.id}>
                <ListItem
                  el={movie}
                  deleteItem={deleteItem}
                  addMovie={addMovie}
                  removeMovie={removeMovie}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-3">
          <p>Will watch: {watch.length} </p>
          <ol className="list-group">
            {watch.map((el, key) => (
              <li className="list-group-item" key={key}>
                {el}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
