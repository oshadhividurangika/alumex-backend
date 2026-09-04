import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [epfno, setEPFNo] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Fallback base URL if VITE_API_URL is missing
    const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

    axios
      .post(`${baseUrl}/users/login`, {
        EPFNo: epfno,      // Updated key to match backend req.body.EPFNo
        password: password,
      })
      .then((response) => {
        console.log("Login Response: ", response.data);
        localStorage.setItem("token", response.data.token);

        toast.success("Login successful!");

        // Redirect based on backend isAdmin flag
        if (response.data.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Login failed");
      });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('/login-bg.jpg')] bg-center bg-cover bg-no-repeat relative">
      <div className="w-1/2 h-full"></div>

      <div className="w-1/2 h-full flex justify-center items-center">
        <div
          className="w-[480px] p-10 rounded-2xl flex flex-col gap-6 shadow-2xl"
          style={{
            background: "rgba(20, 25, 20, 0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
          }}
        >
          <h1 className="text-center font-[Sora,sans-serif] text-4xl font-bold text-[#7ED957] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Sign in
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <input
                onChange={(e) => setEPFNo(e.target.value)}
                value={epfno}
                type="text"
                placeholder="EPF No"
                className="w-full rounded-lg border border-white/50 bg-white/15 px-5 py-3.5 text-base text-white placeholder:text-white/70 outline-none transition backdrop-blur-sm focus:border-[#7ED957] focus:bg-white/25 focus:ring-2 focus:ring-[#7ED957]/40"
              />
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-white/50 bg-white/15 px-5 py-3.5 text-base text-white placeholder:text-white/70 outline-none transition backdrop-blur-sm focus:border-[#7ED957] focus:bg-white/25 focus:ring-2 focus:ring-[#7ED957]/40"
              />

              <p className="text-right mt-2 text-sm text-white/90 font-medium">
                Forget password?{" "}
                <Link
                  to="/forget-password"
                  className="text-[#7ED957] hover:underline font-semibold"
                >
                  Click here
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full mt-2 rounded-lg py-3.5 text-base font-semibold text-white shadow-md transition duration-200"
              style={{
                background: "linear-gradient(135deg, #5CB63C 0%, #3E7D24 100%)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(135deg, #4E9B2E 0%, #356A1F 100%)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(135deg, #5CB63C 0%, #3E7D24 100%)")
              }
            >
              Sign in
            </button>

            <p className="text-center mt-2 text-sm text-white/90 font-medium">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#7ED957] hover:underline font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}