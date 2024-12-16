import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./app-root-page.scss";
import DashBoardManagement from "../components/dashboard-management";
import { AuthenticateUser } from "../services/users-service";
import MyProfile from "../components/myProfile-component";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = "Login successful.";

      if (response === "Login successful.") {
        setIsLoggedIn(true);
        setError("");
        // Store user data in localStorage (or use a token)
        localStorage.setItem("user", JSON.stringify({ username }));
        navigate("/dashboard");
      } else {
        setError(response);
      }
    } catch (error: any) {
      setError("Invalid username or password");
    }
  };

  const handleSignupSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    alert("Account created successfully!");
    setIsSignup(false);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify({ username }));
    navigate("/dashboard");
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In functionality coming soon!");
    setIsLoggedIn(false);
    navigate("/dashboard");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light-blue">
            <div className="row w-100 mx-2 ">
              <div className="col-lg-4 col-md-6 col-sm-8 col-12 mx-auto">
                <div className="card shadow-lg p-4 rounded">
                  <div className="card-body">
                    <header className="text-center mb-4">
                      <h2 className="mb-4 ">
                        {isSignup ? "Create Your Account" : "Welcome Back!"}
                      </h2>
                      <p className="">
                        {isSignup
                          ? "Sign up to get started!"
                          : "Please login to access your dashboard"}
                      </p>
                      <form
                        onSubmit={
                          isSignup ? handleSignupSubmit : handleLoginSubmit
                        }
                      >
                        {isSignup && (
                          <div className="form-floating mb-3">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <label htmlFor="email">Email</label>
                          </div>
                        )}

                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                          <label htmlFor="username">Email/Username</label>
                        </div>

                        <div className="form-floating mb-3">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                              setError("");
                            }}
                            required
                          />
                          <label htmlFor="password">Password</label>
                        </div>

                        {isSignup && (
                          <div className="form-floating mb-3">
                            <input
                              type="password"
                              className="form-control"
                              id="confirm-password"
                              placeholder="Confirm your password"
                              value={confirmPassword}
                              onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                setError("");
                              }}
                              required
                            />
                            <label htmlFor="confirm-password">
                              Confirm Password
                            </label>
                          </div>
                        )}

                        {error && (
                          <div
                            className="alert alert-danger text-center"
                            role="alert"
                          >
                            {error}
                          </div>
                        )}

                        <button
                          type="submit"
                          className="btn btn-primary w-100 py-2"
                        >
                          {isSignup ? "Sign Up" : "Login"}
                        </button>
                      </form>

                      <button
                        className="btn btn-light border w-100 mb-3 d-flex align-items-center justify-content-center gap-2"
                        onClick={handleGoogleSignIn}
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/google-logo.png"
                          alt="Google Icon"
                          className="google-icon"
                        />
                        Sign in with Google
                      </button>

                      <button
                        className="btn btn-link"
                        onClick={() => setIsSignup(!isSignup)}
                      >
                        {isSignup
                          ? "Already have an account? Login"
                          : "Create Your Account"}
                      </button>
                    </header>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <Route
        path="/dashboard"
        element={isLoggedIn ? <DashBoardManagement /> : <Navigate to="/" />}
      />
      <Route path="/profile" element={<MyProfile />} />
    </Routes>
  );
};

export default App;
