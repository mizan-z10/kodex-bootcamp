import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Input from "../../../shared/components/Input";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const handleRegisterFormSubmit = (data) => {
    console.log(data);

    // Later:
    // localStorage.setItem("user", JSON.stringify(data));

    reset();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4 py-10">

      {/* Liquid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute -top-32 -left-32
            w-96 h-96
            bg-blue-500/30
            rounded-full
            blur-3xl
            animate-pulse
          "
        />

        <div
          className="
            absolute top-1/3 -right-32
            w-96 h-96
            bg-cyan-400/20
            rounded-full
            blur-3xl
            animate-pulse
          "
        />

        <div
          className="
            absolute -bottom-40 left-1/3
            w-[500px] h-[500px]
            bg-indigo-500/20
            rounded-full
            blur-3xl
            animate-pulse
          "
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-lg">

        {/* Brand */}
        <div className="text-center mb-7">

          <div
            className="
              inline-flex items-center justify-center
              w-14 h-14
              rounded-2xl
              bg-gradient-to-br from-blue-500 to-cyan-400
              text-white
              text-2xl font-bold
              shadow-lg shadow-blue-500/30
              mb-4
            "
          >
            E
          </div>

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Create your ERP account to get started
          </p>
        </div>

        {/* Glass Card */}
        <div
          className="
            relative
            bg-white/10
            backdrop-blur-2xl
            border border-white/15
            rounded-3xl
            shadow-2xl
            p-7 sm:p-8
            overflow-hidden
          "
        >

          {/* Glass shine */}
          <div
            className="
              absolute -top-20 -right-20
              w-48 h-48
              bg-cyan-400/10
              rounded-full
              blur-2xl
            "
          />

          <form
            onSubmit={handleSubmit(handleRegisterFormSubmit)}
            className="relative z-10 space-y-5"
          >

            {/* Name */}
            <Input
              register={register}
              name="name"
              rule={{
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              }}
              placeholder="Enter your full name"
              type="text"
              label="Full Name"
              error={errors.name}
            />

            {/* Mobile */}
            <Input
              register={register}
              name="mobile"
              rule={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              }}
              placeholder="Enter mobile number"
              type="tel"
              label="Mobile Number"
              error={errors.mobile}
            />

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
                placeholder="Create a password"
                type={showPassword ? "text" : "password"}
                label="Password"
                error={errors.password}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute right-3 top-9
                  text-xs font-medium
                  text-slate-400
                  hover:text-white
                  transition
                "
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Input
                register={register}
                name="confirmPassword"
                rule={{
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                }}
                placeholder="Confirm your password"
                type={showConfirmPassword ? "text" : "password"}
                label="Confirm Password"
                error={errors.confirmPassword}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="
                  absolute right-3 top-9
                  text-xs font-medium
                  text-slate-400
                  hover:text-white
                  transition
                "
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 rounded border-slate-600"
              />

              <span>
                I agree to the{" "}
                <span className="text-cyan-400 hover:text-cyan-300">
                  Terms & Conditions
                </span>
              </span>
            </label>

            {/* Register Button */}
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
              <span
                className="
                  absolute inset-0
                  -translate-x-full
                  bg-white/20
                  skew-x-12
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Create Account
              </span>
            </button>
          </form>

          {/* Login */}
          <p className="relative z-10 text-center text-sm text-slate-400 mt-6">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="
                text-cyan-400
                font-semibold
                hover:text-cyan-300
                transition
              "
            >
              Login
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

export default RegisterPage;