import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

function News() {

  const [news, setNews] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then((data) => {

        setNews(data);

      });

  }, []);

  return (

    <div className="container py-4">

      <h1 className="text-center mb-5">
        Latest News
      </h1>

      <div className="row">

        {
          news.map((item) => (

            <div
              className="col-md-4 mb-4"
              key={item._id}
            >

              <div
                className="card h-100 shadow"
                style={{cursor:"pointer"}}
                onClick={() =>
                  navigate(`/news/${item._id}`)
                }
              >

                <img
                  src={item.image}
                  alt=""
                  className="card-img-top"
                  height="250"
                />

                <div className="card-body">

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <small>{item.date}</small>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default News;