import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await login(email, password);
    if (result.success) {
      navigate("/profile");
    } else {
      setError(result.message);
    }
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5 w-75 mx-auto">
            <div className="card border border-light-subtle rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-5">
                      <h2 className="h4 text-center">Inicia sesión</h2>
                      <h3 className="fs-6 fw-normal text-secondary text-center m-0">
                        Ingresa tus datos!
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="row gy-3 overflow-hidden">
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="name@example.com"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="password"
                              placeholder="Password"
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password" className="form-label">
                              Password
                            </label>
                          </div>
                        </div>
                        {error && (
                          <div className="col-12">
                            <div className="alert alert-danger">{error}</div>
                          </div>
                        )}
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              className="btn bsb-btn-xl btn-primary"
                              type="submit"
                            >
                              Iniciar sesión
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="col-md-6 d-flex flex-column align-items-center">
                    <p className="mt-5 mb-3 text-center">
                      O inicia sesión con:
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                      <a
                        href="#!"
                        className="btn btn-lg btn-outline-danger p-3 lh-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          fill="currentColor"
                          className="bi bi-google"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                      </a>
                      <a
                        href="#!"
                        className="btn btn-lg btn-outline-primary p-3 lh-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          fill="currentColor"
                          className="bi bi-facebook"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </a>
                      <a
                        href="#!"
                        className="btn btn-lg btn-outline-info p-3 lh-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          fill="currentColor"
                          className="bi bi-twitter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </a>
                      <a
                        href="#!"
                        className="btn btn-lg btn-outline-dark p-3 lh-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          fill="currentColor"
                          className="bi bi-apple"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.13c-.477.508-.78 1.188-.924 1.79a4.527 4.527 0 0 0-1.347-.19C3.67 2.878.87 5.977.87 9.3c0 3.467 2.902 6.218 6.354 6.218 1.694 0 3.223-.627 4.422-1.75.634-.575 1.128-1.22 1.61-1.876.03.17.092.354.186.518.261.446.835.757 1.583.757 1.55 0 2.713-1.215 2.713-2.546 0-1.473-1.252-2.561-2.725-2.561-.217 0-.437.026-.659.085a2.793 2.793 0 0 0-1.273-1.322c.6-.347 1.018-1.053 1.018-1.843 0-1.238-.895-2.058-2.07-2.058-.754 0-1.525.362-1.882.837C9.79 2.445 10.608 1.71 11.182.008z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
