"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import {motion} from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { FaApple, FaFacebookF } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import learner from "@/assets/images/student-reading.svg"
import Image from "next/image"


const SignIn = () => {
    const navigate = useRouter()
    
  // 🧠 States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🚀 Handle login submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate.push("/dashboard"); // Redirect after login
    } catch (err) {
      console.error("Login failed", err);
    } finally {
      setLoading(false);
    }
  };

  // 🌐 Handle social sign-in (mock)
  const handleSocialSignIn = async (provider: string) => {
    setSocialLoading(provider);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      alert(`Signed in with ${provider}`);
    } catch (err) {
      console.error(err);
    } finally {
      setSocialLoading(null);
    }
  };

  return (
    
        <div className="w-full min-h-screen flex items-center justify-center bg-[#dae1ee]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="width flex gap-[60px] max-sm:flex-col items-center justify-center bg-[#3b83f627] p-18 max-mobile:p-5 max-mobile:bg-[#00968700] rounded-2xl"
      >
        <Image
          src={learner}
          alt="Login"
          className="w-[400px] hidden md:block"
          width={1000}
          height={1000}
        />

        <div className="max-w-[400px]  max-mobile:w-full w-full p-6 bg-[#ffffffc7] rounded-2xl shadow-md">
          {/* <img onClick={() => navigate.push('/')} src={Logo} alt="SpeakTribe Logo" className="w-[80px] mb-4" /> */}

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
            className="font-bold text-3xl text-[#263238] mb-4"
          >
            Welcome back!
          </motion.h1>

          <p className="text-sm text-gray-600 mb-6">
            Please enter your email and password to continue.
          </p>

          <form onSubmit={()=>{}}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded-md outline-none border-[#2632381e] placeholder:text-[13px] placeholder:text-[#333] text-[#333]"
              required
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mb-6 border rounded-md outline-none border-[#2632381e] placeholder:text-[13px] placeholder:text-[#333] text-[#333]"
                required
              />
              {/* Toggle Eye Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3B82F6] text-white py-2 rounded-md hover:bg-[#4f8df1] transition"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </button>


            <div className="flex justify-end mt-4 mb-4">
              <button
                type="button"
                disabled
                className="text-sm text-gray-400 cursor-not-allowed"
              >
                Forgot Password?
              </button>
            </div>

          </form>

          {/* social logins */}

          <div className="flex flex-col items-center gap-5 mt-6">
            <p className="text-gray-500 text-sm font-medium">Or continue with</p>
            <div className="flex gap-6">
              {[
                { provider: "google", icon: <FcGoogle size={30} />, active: true, loading: socialLoading === "google" },
              ].map(({ provider, icon, active, loading }) => (
                <button
                  key={provider}
                //   onClick={active ? () => handleSocialSignIn(provider) : undefined}
                  disabled={!active || loading}
                  className={`p-2 rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 
                    ${active
                      ? "hover:bg-[#00968752] hover:scale-105 focus:ring-[#3B82F6] bg-[#0096872a]"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"
                    }`}
                  aria-label={`Sign up with ${provider}`}
                >
                  {loading ? (
                    <div className="w-8 h-8 border-2 border-[#3B82F6] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    icon
                  )}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm mt-4 text-center text-[#333]">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-[#3B82F6] font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default SignIn