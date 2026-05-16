import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

function GalleryDetails() {

  const { id } = useParams();

  const [gallery, setGallery] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:5000/api/gallery/${id}`)
      .then((res) => res.json())
      .then((data) => {

        setGallery(data);

      });

  }, [id]);

  if (!gallery) {

    return <h2>Loading...</h2>;
  }

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <img
          src={gallery.image}
          alt=""
          className="img-fluid rounded"
        />

        <h1 className="mt-4">
          {gallery.title}
        </h1>

        <p className="mt-3 fs-5">
          {gallery.content}
        </p>

      </div>

    </div>
  );
}

export default GalleryDetails;