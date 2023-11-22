import React, {useState } from "react";
import "./Login.css";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/auth/login',{
//             method:'POST',
//             body:JSON.stringify({
//                 username: "mor_2314",
//                 password: "83r5^_"
//             })
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//   },[])
  return (
    <center>
      <div>
        <form onSubmit={submitHandler}>
          <br />
          <input
            type="text"
            placeholder="Enter your Username"
            style={{ backgroundColor: "purple", color: "white" }}
            name="username"
            value={username}
            onChange={changeHandler}
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter your Password"
            style={{ backgroundColor: "purple", color: "white" }}
            name="password"
            value={password}
            onChange={changeHandler}
            required
          />
          <br />
          <br />
          <button
            type="submit"
            style={{ backgroundColor: "violet", color: "white" }}
          >
            Submit
          </button>
        </form>
      </div>
    </center>
  );
};

export default Login;
