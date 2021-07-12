import React from "react";

const Login = (props) => {
  return (
    <>
      <div className="login-wrapper row">
        <form>
          <div className="col-sm">
            <label htmlFor="Username">
              <input
                type="text"
                placeholder="Username"
                onChange={({ target }) =>
                  sessionStorage.setItem("Username", { target })
                }
              />
            </label>
          </div>
          <div className="col-sm">
            <label htmlFor="Password">
              <input
                type="password"
                placeholder="Password"
                onChange={({ target }) =>
                  sessionStorage.setItem("Password", { target })
                }
              />
            </label>
          </div>
          <div className="col-sm">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => {
                window.sessionStorage.setItem("loggedIn", true);
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
