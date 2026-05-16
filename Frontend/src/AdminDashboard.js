import {
  useEffect,
  useState
} from "react";

function AdminDashboard() {

  const [stats, setStats] =
    useState({});

  useEffect(() => {

    fetch(

      "http://localhost:5000/api/admin/dashboard",

      {

        headers: {

          Authorization:
            localStorage.getItem(
              "token"
            )

        }

      }

    )

    .then((res)=>
      res.json()
    )

    .then((data)=>{

      setStats(data);

    });

  }, []);

  return (

    <div className="container mt-5">

      <h1 className="mb-5">

        Admin Dashboard

      </h1>

      <div className="row">

        <div className="col-md-3">

          <div className="card p-4 shadow">

            <h3>Total Users</h3>

            <h1>
              {stats.users}
            </h1>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card p-4 shadow">

            <h3>Contacts</h3>

            <h1>
              {stats.contacts}
            </h1>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card p-4 shadow">

            <h3>News</h3>

            <h1>
              {stats.news}
            </h1>

          </div>

        </div>

        <div className="col-md-3">

          <div className="card p-4 shadow">

            <h3>Gallery</h3>

            <h1>
              {stats.gallery}
            </h1>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;