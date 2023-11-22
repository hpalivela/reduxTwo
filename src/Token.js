import React, { useState } from "react";

const Token = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState(false)
  //   const[token,setToken]=useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {if(res.ok){return res.json()}})
      .then((data) => {
        const token = data.token;
        localStorage.setItem("token", token);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error)
      });
  };

  return (
    <div>
      <center>
        {error && <h1>invalid</h1>}
        <form onSubmit={submitHandler}>
          <br />
          <input
            type="text"
            name="username"
            value={username}
            required
            placeholder="enter username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default Token;
