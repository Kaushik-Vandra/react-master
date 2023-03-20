import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
// import { loginAction } from "../../Redux/AuthSlice";
import "./signin.scss";
import { LOGIN_S } from "../../constants";

const SignIn = () => {

  const {register, handleSubmit} = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (data) => {
    console.log('data: ', data);

    // let requestPayload = {
    //   email: "admin@clefill.com",
    //   password: "123456",
    //   deviceId: "12",
    //   deviceType: "web",
    //   fcmToken: "",
    // };

    // dispatch(loginAction(requestPayload))
    //   .then((res) => navigate("/dashboard"))
    //   .catch((err) => alert(err?.message || "Please try agian!"));
    // e.preventDefault();
    // localStorage.setItem('email', email);
    // setIsLogin(true);

    dispatch({type: LOGIN_S, payload: data.email});
    navigate("/form");
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>In SignIn</h2>
      </div>
      <br />
      <div style={{ justifyContent: "center" }}>
        <div className="card w-50 m-auto">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleClick)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password", { required: true })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
