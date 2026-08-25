import React, { useState } from "react";
import Input from "../../../shared/components/Input";
import { useAuth } from "../hooks/UseAuth";



const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);


let {register, handleLoginFormSubmit,errors, handleSubmit, navigate} = useAuth();




  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4">
      {/* Liquid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blue Blob */}
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-blue-500/25
            blur-3xl
            animate-pulse
          "
        />

        {/* Cyan Blob */}
        <div
          className="
            absolute
            top-1/3
            -right-40
            w-[450px]
            h-[450px]
            rounded-full
            bg-cyan-400/20
            blur-3xl
            animate-pulse
          "
        />

        {/* Purple Blob */}
        <div
          className="
            absolute
            -bottom-40
            left-1/3
            w-[450px]
            h-[450px]
            rounded-full
            bg-indigo-500/20
            blur-3xl
            animate-pulse
          "
        />
      </div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-7">
          <div
            className="
              inline-flex
              items-center
              justify-center
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-blue-500
              to-cyan-400
              text-white
              text-2xl
              font-bold
              shadow-lg
              shadow-blue-500/30
              mb-4
            "
          >
            E
          </div>

          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-slate-400">
            Login to your ERP account
          </p>
        </div>

        {/* Glass Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/15
            bg-white/10
            backdrop-blur-2xl
            shadow-2xl
            p-7
            sm:p-8
          "
        >
          {/* Glass Highlight */}
          <div
            className="
              absolute
              -top-24
              -right-24
              w-52
              h-52
              rounded-full
              bg-cyan-400/10
              blur-3xl
            "
          />

          <form
            onSubmit={handleSubmit(handleLoginFormSubmit)}
            className="relative z-10 space-y-5"
          >
            {/* Email */}
            <Input
              register={register}
              name="email"
              rule={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
              placeholder="Enter your email"
              type="email"
              label="Email Address"
              error={errors.email}
            />

            {/* Password */}
            <div className="relative">
              <Input
                register={register}
                name="password"
                rule={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "At least 6 characters are required",
                  },
                }}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                label="Password"
                error={errors.password}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-3
                  top-9
                  text-xs
                  font-medium
                  text-slate-400
                  hover:text-cyan-400
                  transition
                "
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="
                    w-4
                    h-4
                    rounded
                    border-white/20
                    bg-white/10
                    accent-cyan-500
                  "
                />
                Remember me
              </label>

              <button
                type="button"
                className="
                  text-cyan-400
                  font-medium
                  hover:text-cyan-300
                  transition
                "
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                py-3
                text-white
                font-semibold
                shadow-lg
                shadow-blue-500/20
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-cyan-500/30
              "
            >
              {/* Shine Animation */}
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  skew-x-12
                  bg-white/20
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">Login</span>
            </button>
          </form>

          {/* Register */}
          <p className="relative z-10 text-center text-sm text-slate-400 mt-6">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="
                text-cyan-400
                font-semibold
                hover:text-cyan-300
                transition
              "
            >
              Create account
            </button>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-5">
          © 2026 ERP System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
