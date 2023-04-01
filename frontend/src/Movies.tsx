//import data from './MovieDataSample.json';
import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieData;

function MovieList() {
  const [listOMovies, setListOMovies] = useState(mds);

  const addMovie = () => {
    setListOMovies([
      ...mds,
      {
        Category: 'Adventure',
        Title: 'Bambi',
        Year: 1942,
        Director: 'Clyde Geronimi',
        Rating: 'PG',
      },
    ]);
  };

  return (
    <>
      <div>
        <h3 className="font-weight-bold text-decoration-underline">
          Joel Hilton's Movie Collection
        </h3>
      </div>

      <div>
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th className="font-italic">Title</th>
              <th className="font-italic">Year</th>
              <th className="font-italic">Director</th>
              <th className="font-italic">Rating</th>
              <th className="font-italic">Category</th>
            </tr>
          </thead>
          <tbody>
            {listOMovies.map((m) => (
              <tr key={m.Title}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
