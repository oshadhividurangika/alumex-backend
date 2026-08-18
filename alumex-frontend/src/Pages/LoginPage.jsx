// export default function LoginPage() {
//   return (
//     <div className="w-full h-screen flex justify-center items-center bg-[url('login-bg.avif')] bg-center bg-cover bg-no-repeat">
//         <div className="w-1/2 h-full"></div>
//         <div className="w-1/2 h-full flex justify-center items-center">
//             <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl shadow-2xl flex flex-col justify-center items-center">
//             <h1 className="text-center font-[Sora,sans-serif] text-3xl font-bold text-[#0B1A33]">Sign in</h1>
//             <input placeholder="EPF No" className="w-full rounded-lg border border-white/50 bg-white/50 px-4 py-3 text-sm text-[#0B1A33] placeholder:text-[#4A5568] outline-none transition focus:border-[#4E9B2E] focus:ring-2 focus:ring-[#4E9B2E]/30"/>
//             <input type="password" placeholder="Password" className="w-full rounded-lg border border-white/50 bg-white/50 px-4 py-3 pr-11 text-sm text-[#0B1A33] placeholder:text-[#4A5568] outline-none transition focus:border-[#4E9B2E] focus:ring-2 focus:ring-[#4E9B2E]/30"/>
//             {/* <p>Forget</p> */}
//             <button
//               type="submit"
//               className="w-full rounded-lg bg-[#4E9B2E] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#3d7d24] active:bg-[#356a1f]"
//             >
//               Sign in
//             </button>
//             </div>
//         </div>
//     </div>
//   )
// }

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('login-bg.avif')] bg-center bg-cover bg-no-repeat relative">
      <div className="w-1/2 h-full"></div>
      
      {/* Container aligned to the right side */}
      <div className="w-1/2 h-full flex justify-center items-center">
        {/* Expanded Glassmorphism card container */}
        <div className="w-[480px] p-10 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl flex flex-col gap-6">
          
          {/* Green Title */}
          <h1 className="text-center font-[Sora,sans-serif] text-4xl font-bold text-[#4E9B2E] mb-2">
            Sign in
          </h1>

          {/* Form fields */}
          <form className="flex flex-col gap-5">
            <div>
              <input
                type="String"
                placeholder="EPF No"
                className="w-full rounded-lg border border-white/60 bg-white/40 px-5 py-3.5 text-base text-gray-800 placeholder:text-gray-500 outline-none transition focus:border-[#4E9B2E] focus:bg-white/60 focus:ring-2 focus:ring-[#4E9B2E]/30"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-white/60 bg-white/40 px-5 py-3.5 text-base text-gray-800 placeholder:text-gray-500 outline-none transition focus:border-[#4E9B2E] focus:bg-white/60 focus:ring-2 focus:ring-[#4E9B2E]/30"
              />
              
              {/* Forgot password link */}
              <div className="text-right mt-2 text-sm text-gray-700 font-medium">
                Forget password?{" "}
                <a href="#" className="text-[#4E9B2E] hover:underline font-semibold">
                  Click here
                </a>
              </div>
            </div>

            {/* Primary Green button */}
            <button
              type="submit"
              className="w-full mt-2 rounded-lg bg-[#4E9B2E] py-3.5 text-base font-semibold text-white shadow-md transition duration-200 hover:bg-[#3d7d24] active:bg-[#356a1f]"
            >
              Sign in
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}