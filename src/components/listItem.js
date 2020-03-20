import React, { useState } from "react";

export let ListItem = props => {
  //деструкртурирование пропсов
  let { el, removeMovie, addMovie, deleteItem } = props;
  //состояние для просмотра
  let [willWatch, setWillWatch] = useState(false);
  return (
    //возвращение карточки
    <div className="card">
      {el.backdrop_path ? (
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${el.backdrop_path ||
            el.poster_path}`}
          alt={el.title}
        />
      ) : (
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500/xqQztbT6KlPLQLlRtNHoXivEMZA.jpg`}
          alt={el.title}
        />
      )}

      <div className="card-body">
        <h6 className="card-title">{el.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {el.vote_average}</p>
          {/* показ кнопки в зависимости от состояния */}
          {willWatch ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setWillWatch(false);
                removeMovie(el.title);
              }}
            >
              Remove Will Watch
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setWillWatch(true);
                addMovie(el.title);
              }}
            >
              Add Will Watch
            </button>
          )}
          {/* кнопка удаления объекта из списка*/}
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteItem(el);
            }}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};
