import { Link, useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setError("");
      // Simpan token dan user ke localstorage
      localStorage.setItem("user", JSON.stringify(response.data.author));
      localStorage.setItem("token", response.data.token);
      navigate("/homepage");
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
      setError("Login gagal, Silahkan coba lagi");
    }
  };
  return (
    <div className="max-w-[768px] h-screen mx-auto border-l-2 border-r-2 border-black overflow-auto relative">
      <form onSubmit={handleLogin} className="w-[500px] mx-auto mt-[150px]">
        <div className="flex flex-col px-4 py-4 border-2 border-black rounded-lg">
          <div className="mb-8 text-center">
            <h1 className="text-2xl text-primary font-bold">Jeruk Sosmed</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="py-2 px-2 rounded-lg border-2 border-primary text-black text-base"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base">
                Password
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="py-2 px-2 rounded-lg border-2 border-primary text-black text-base"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button
            type="submit"
            className="py-2 rounded-lg mt-10 mb-10 bg-primary text-white"
          >
            Login
          </button>
          <div className="flex justify-center gap-2">
            <p>Belum punya akun?</p>
            <Link to={"/register"} className="text-primary">
              Resgister
            </Link>
          </div>
        </div>
      </form>
      {/* Side Nav */}
      <SideNav />
    </div>
  );
};

export default Login;
