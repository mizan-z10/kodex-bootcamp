import React from "react";

const Input = ({
  label,
  register,
  name,
  rule,
  error,
  ...props
}) => {
  return (
    <div className="w-full">
      {/* Label */}
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-slate-200"
      >
        {label}
      </label>

      {/* Input */}
      <input
        id={name}
        {...register(name, rule)}
        {...props}
        className={`
          w-full
          px-4
          py-3
          rounded-xl
          border
          bg-white/10
          backdrop-blur-md
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          duration-300

          ${
            error
              ? "border-red-400 focus:ring-2 focus:ring-red-400/20"
              : "border-white/15 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          }
        `}
      />

      {/* Error */}
      {error && (
        <p className="mt-1.5 text-xs text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;