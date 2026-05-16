import {

  useState

} from "react";

import {

  Link

} from "react-router-dom";

import "./AuthPages.css";

function ForgotPassword() {

  const [email, setEmail] =
    useState("");

  const submitHandler =
   async (e) => {

    e.preventDefault();

    try {

      const response =
       await fetch(

"http://localhost:5000/api/auth/forgot-password",

        {

          method: "POST",

          headers: {

            "Content-Type":
             "application/json"

          },

          body: JSON.stringify({

            email

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

          Forgot Password

        </h1>

        <p className="auth-subtitle">

          Enter your registered email

        </p>

        <form
          onSubmit={submitHandler}
        >

          <input

            type="email"

            placeholder="Enter Email"

            className="form-control auth-input"

            required

            onChange={(e)=>

              setEmail(
                e.target.value
              )

            }

          />

          <button
            className="auth-btn"
          >

            Send Reset Link

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

export default ForgotPassword;