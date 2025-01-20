import { Link, useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password tidak sama");
      return;
    }
    try {
      const userData = { name, email, password, confirmPassword };
      console.log("Sending data:", userData); // Log data yang dikirim
      const response = await axios.post(
        "https://jeruk-sosmed-api-771822095302.asia-southeast2.run.app/auth/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setSuccess("Register berhasil");
      setError("");
      // redirect Login Page
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
      setError("Register gagal, Silahkan coba lagi");
    }
  };

  return (
    <div className="max-w-[768px] h-screen mx-auto border-l-2 border-r-2 border-black overflow-auto relative">
      <form onSubmit={handleRegister} className="w-[400px] mx-auto mt-[30px]">
        <div className="flex flex-col px-4 py-4 border-2 border-black rounded-lg">
          <div className="mb-8 text-center">
            <h1 className="text-2xl text-primary font-bold">Jeruk Sosmed</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="py-2 px-2 rounded-lg border-2 border-primary text-black text-base"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="py-2 px-2 rounded-lg border-2 border-primary text-black text-base"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className="py-2 rounded-lg mt-10 mb-10 bg-primary text-white"
          >
            Register
          </button>
          <div className="flex justify-center gap-2">
            <p>Sudah punya akun?</p>
            <Link to={"/login"} className="text-primary">
              Login
            </Link>
          </div>
        </div>
      </form>
      {/* Side Nav */}
      <SideNav />
    </div>
  );
};

export default Register;