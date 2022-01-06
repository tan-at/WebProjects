import React from "react";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes, //No longer Switch due to React 6.0.0 update
  Route,
  Link,
  Navigate, //No longer Redirect due to React 6.0.0 update
} from "react-router-dom";

import Userfront from "@userfront/react";

import "./App.css";

Userfront.init("zn5gggnv");

const SignupForm = Userfront.build({
  toolId: "omlnrm",
});

const LoginForm = Userfront.build({
  toolId: "krkbdk",
});

const PasswordResetForm = Userfront.build({
  toolId: "bldkam",
});

const LogoutButton = Userfront.build({
  toolId: "rlndao",
});

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/reset">Password Reset</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <SignupForm />
  </div>
);

const Login = () => (
  <div>
    <h2>Login</h2>
    <LoginForm />
  </div>
);

const PasswordReset = () => (
  <div>
    <h2>PasswordReset</h2>
    <PasswordResetForm />
  </div>
);

const Dashboard = () => {
  const [privateData, setPrivateData] = useState<{ someSecretData: string }>();

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch("http://localhost:3010/data", {
          headers: {
            Authorization: `Bearer ${Userfront.accessToken()}`,
          },
        }).then((response) => response.json());
        setPrivateData(result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (!Userfront.accessToken()) {
    return <Navigate to={{ pathname: "/login" }} />;
  }

  console.log(Userfront);

  //const userData = JSON.parse(atob(Userfront.accessToken().split("."[1])));
  //atob not used anymore, replace with 'Buffer.from' or 'buf.toString'

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>User data</h3>
      {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
      <h3>Private data</h3>
      <pre>{JSON.stringify(privateData, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
};

export default App;
