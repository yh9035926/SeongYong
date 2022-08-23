import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movies, setMovies] = useState([
    { id: 1, title: 1, year: 2001 },
    { id: 2, title: 2, year: 2002 },
    { id: 3, title: 3, year: 2003 },
  ]);

  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");

  const Delete = (id) => {
    setMovies(
      movies.filter((m) => {
        return m.id !== id;
      })
    );
  };

  const validateFrom = () => {
    let validated = true;
    if (!movieTitle) {
      setTitleError("영화 제목을 넣어주세요!");
      validated = false;
    }
    if (!movieYear) {
      setYearError("개봉년도를 넣어주세요!");
      validated = false;
    }
    return validated;
  };

  const List = styled.div`
    width: 100px;
    color: aquamarine;
    border: 1px solid;
    border-radius: 30%;
    box-shadow: 10px 10px 10px;
    background-color: blue;
    text-align: center;
  `;

  const List2 = styled.div`
    width: 100px;
    color: chocolate;
    border: 1px solid;
    border-radius: 30%;
    box-shadow: 10px 10px 10px;
    background-color: slateblue;
    text-align: center;
  `;

  const addMovie = (e) => {
    e.preventDefault();
    if (validateFrom()) {
      setMovies([
        ...movies,
        {
          id: Date.now(),
          title: movieTitle,
          year: movieYear,
        },
      ]);
      setMovieTitle("");
      setMovieYear("");
      setTitleError("");
      setYearError("");
    }
  };
  return (
    <div>
      <div>
        <List>movie list!</List>

        <form className="flex" onSubmit={addMovie}>
          <input
            type="text"
            placeholder="영화 제목"
            onChange={(e) => setMovieTitle(e.target.value)}
            value={movieTitle}
          />

          <input
            className="left"
            type="number"
            placeholder="개봉 년도"
            onChange={(e) => setMovieYear(e.target.value)}
            value={movieYear}
          />

          <button type="submit">추가하기</button>
        </form>
        <div className="flex font">
          <div>{titleError}</div>
          <div className="left padding">{yearError}</div>
        </div>
      </div>
      <List2>second</List2>
      {movies.map((m) => (
        <div>
          <div key={m.id}>
            {m.title} :{m.year}
            <button onClick={() => Delete(m.id)}>삭제하기</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
