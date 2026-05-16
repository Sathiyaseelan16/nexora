import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

function NewsDetails() {

  const { id } = useParams();

  const [news, setNews] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:5000/api/news/${id}`)
      .then((res) => res.json())
      .then((data) => {

        setNews(data);

      });

  }, [id]);

  if (!news) {

    return <h2>Loading...</h2>;
  }

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <img
          src={news.image}
          alt=""
          className="img-fluid rounded"
        />

        <h1 className="mt-4">
          {news.title}
        </h1>

        <p className="text-muted">
          {news.date}
        </p>

        <p className="mt-3 fs-5">
          {news.content}
        </p>

      </div>

    </div>
  );
}

export default NewsDetails;