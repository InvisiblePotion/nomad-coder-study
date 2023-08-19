import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setMovies(() => json.data.movies);
    setLoading(() => false);
  };
  // 위 getMovies()는 아래 코드를 async, await을 이용하여 세련되게 작성한 코드이다.
  // fetch(
  //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
  // )
  //   .then((response) => response.json())
  //   .then((json) => setMovies(() => json.data.movies));
  //   setLoading(() => false);

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((mov) => (
            <Movie
              key={mov.key}
              coverImg={mov.medium_cover_image}
              title={mov.title}
              summary={mov.summary}
              genres={mov.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
