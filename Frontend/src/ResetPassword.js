import {

  useState

} from "react";

import {

  useParams,

  Link

} from "react-router-dom";

import "./AuthPages.css";

function ResetPassword() {

  const { token } =
    useParams();

  const [password,
   setPassword] =
    useState("");

  const submitHandler =
   async (e) => {

    e.preventDefault();

    try {

      const response =
       await fetch(

`http://localhost:5000/api/auth/reset-password/${token}`,

        {

          method: "POST",

          headers: {

            "Content-Type":
             "application/json"

          },

          body: JSON.stringify({

            password

          })

        }

      );

      const data =
       await response.json();

      alert(data.message);

    } catch (error) {

      alert(
       "Something went wrong"
      );

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1 className="auth-title">

          Reset Password

        </h1>

        <p className="auth-subtitle">

          Enter your new password

        </p>

        <form
          onSubmit={submitHandler}
        >

          <input

            type="password"

            placeholder="New Password"

            className="form-control auth-input"

            required

            onChange={(e)=>

              setPassword(
                e.target.value
              )

            }

          />

          <button
            className="auth-btn"
          >

            Reset Password

          </button>

        </form>

        <div className="auth-link">

          <Link to="/auth">

            Back To Login

          </Link>

        </div>

      </div>

    </div>

  );

}

export default ResetPassword;