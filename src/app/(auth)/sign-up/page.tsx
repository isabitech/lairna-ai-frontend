"use client"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { FaEyeSlash } from "react-icons/fa"
import { IoEyeSharp } from "react-icons/io5"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import SignupImage from "@/assets/images/student-school.svg"
import Image from "next/image"


const SignUp = () => {
    const navigate = useRouter();
     
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [socialLoading, setSocialLoading] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));


  };
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  localStorage.setItem("user", JSON.stringify(formData));

  
  setTimeout(() => {
    setLoading(false);
    navigate.push("/dashboard");
  }, 1000);
};

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#dae1ee]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-5 md:p-10 w-full max-w-6xl">
        
        {/* Left Side Illustration */}
        <motion.div
          className="flex flex-col gap-5 items-center max-w-[500px] w-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div onClick={() => navigate.push("/")} className="min-w-[150px] cursor-pointer">
            {/* <img src={logo} alt="logo" className="w-[150px] md:w-[200px]" /> */}
          </div>
          <Image src={SignupImage} alt="signup" className="w-full max-w-[400px]" width={1000} height={1000}/>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          className="signup w-full max-w-[450px] flex flex-col gap-5 text-[#263238] font-sans items-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex flex-col gap-2 justify-center items-center text-center">
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
              className="font-bold text-xl md:text-3xl text-[#009688]"
            >
              Get Started!
            </motion.h1>
            <p className="font-medium">Become fluent in the native languages of your choice.</p>
            <p className="font-medium text-xl text-[#263238]">Join Now . . .</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}className="flex flex-col gap-4 w-full mx-auto">
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
              { label: "Display Name", name: "displayName", type: "text" },
              { label: "Email", name: "email", type: "email" },
            ].map((field, idx) => (
              <motion.fieldset
                key={idx}
                className="relative border-2 border-[#00968850] rounded-lg px-2 py-2 transition focus-within:border-[#009688]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <legend className="px-1 text-sm text-[#009688]">{field.label}</legend>
                <input
                  type={field.type}
                  name={field.name}
                //   value={formData[field.name]}
                  onChange={handleChange}
                  className="pl-2 py-1 w-full bg-transparent outline-none"
                />
              </motion.fieldset>
            ))}

            <motion.fieldset
              className="relative border-2 border-[#00968850] rounded-lg px-2 py-2 focus-within:border-[#009688]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <legend className="px-1 text-sm text-[#009688]">Password</legend>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="pl-2 py-1.5 w-full bg-transparent outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </button>
            </motion.fieldset>

            <motion.fieldset
              className="relative border-2 border-[#00968850] rounded-lg px-2 py-2 focus-within:border-[#009688]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <legend className="px-1 text-sm text-[#009688]">Confirm Password</legend>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="pl-2 py-1.5 w-full bg-transparent outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
              </button>
            </motion.fieldset>

            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg p-2 text-white text-lg font-semibold shadow-md transition ${
                loading ? "bg-[#80cbc4] cursor-not-allowed" : "bg-[#009688] hover:bg-[#00796B]"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
              ) : (
                "Create Account"
              )}
            </motion.button>

            <p className="text-sm text-gray-600 text-center mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-[#009688] font-semibold hover:underline">
                Login
              </Link>
            </p>
          </form>

          {/* social logins */}
          <div className="flex flex-col items-center gap-5 mt-6">
            <p className="text-gray-500 text-sm font-medium">Or continue with</p>
            <div className="flex gap-6">
              {[
                { provider: "google", icon: <FcGoogle size={36} />, active: true, loading: socialLoading === "google" },
              ].map(({ provider, icon, active, loading }) => (
                <button
                  key={provider}
                //   onClick={active ? () => handleSocialSignIn(provider) : undefined}
                  disabled={!active || loading}
                  className={`p-3 rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 
                    ${
                      active
                        ? "hover:bg-[#00968752] hover:scale-105 focus:ring-[#009688] bg-[#0096872a]"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
                    }`}
                  aria-label={`Sign up with ${provider}`}
                >
                  {loading ? (
                    <div className="w-8 h-8 border-2 border-[#009688] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    icon
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SignUp