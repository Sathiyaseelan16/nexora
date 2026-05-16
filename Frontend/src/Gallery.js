import {
  useEffect,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

function Gallery() {

  const [gallery, setGallery] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:5000/api/gallery")
      .then((res) => res.json())
      .then((data) => {

        setGallery(data);

      });

  }, []);

  return (

    <div className="container py-4">

      <h1 className="text-center mb-5">
        Gallery
      </h1>

      <div className="row">

        {
          gallery.map((item) => (

            <div
              className="col-md-4 mb-4"
              key={item._id}
            >

              <div
                className="card h-100 shadow"
                style={{cursor:"pointer"}}
                onClick={() =>
                  navigate(`/gallery/${item._id}`)
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

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default Gallery;
