import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "496585e562e2045a3c33f7916297c9f7";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    /* 
      아래 ()(); 형태의 함수는 IIFE(Immediately Invoked Function Expression: 즉시 호출 함수 표현)라 불리는 표현이다.
      즉시 실행되는 익명 함수이며 스코프의 격리나 클로저 생성 등의 이유로 사용된다.
      이 경우에는 클로저 생성을 위해 사용되는데 이유는 아래와 같다.

      useEffect()는 React가 원활한 렌더링 및 업데이트 사이클을 동작시키기 위해
      콜백 함수 내부에 있는 비동기 작업의 완료를 기다리지 않고 즉시 반환되는 특성이 있다.
      이러한 useEffect()의 특수성을 해결하기 위해 주로 사용 되는 방법이 비동기 처리를 IIFE 안에 집어넣는 것이다.
      IIFE를 사용하여 클로저를 생성하면 useEffect()가 반환된 후에도 비동기 처리를 이어나갈 수 있다.
    */
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          {/* 아래 img 태그는 Image 컴포넌트로 바꿔야 하겠지만 CSS와의 충돌을 피할 방법을 몰라 그냥 두겠다 */}
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      {/* 아래 style-jsx는 #2.2 강의 소스코드에서 가져온 내용이다. (위 태그에도 약간의 변경 있음) */}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
