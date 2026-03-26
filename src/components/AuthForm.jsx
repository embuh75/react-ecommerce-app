import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../lib/context/AuthContext";

export default function AuthForm() {
  const { signUp, signIn } = useAuth();
  const [error, setError] = useState(null);
  const [switchForm, setSwitchForm] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setError(null);
    let result;

    if (switchForm) {
      result = signUp(data.email, data.password);
    } else {
      result = signIn(data.email, data.password);
    }

    if (result.success) {
      navigate("/")
    };

    setError(result)
  };

  return (
    <div className="auth-container">
      <h1 className="page-title">{switchForm ? "Sign-Up" : "Sign-In"}!</h1>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          {errors.email && <p className="form-error">{errors.email.message}</p>}
          <input
            className="form-input"
            type="email"
            id="email"
            {...register("email", { required: "Email is required!" })}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}
          <input
            className="form-input"
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters!",
              },
              maxLength: {
                value: 12,
                message: "Password must be less than 12 characters!",
              },
            })}
          />
        </div>
        {error && <div className="error-message">{error.error}</div>}
        <div className="flex flex-wrap items-center">
          <div className="w-1/2">
            <button type="submit" className="btn btn-primary btn-large">
              {switchForm ? "Sign-Up" : "Sign-In"}
            </button>
          </div>
          <div className="w-1/2">
            <p className="text-sm font-medium">
              {switchForm
                ? "Already have an account?"
                : "Dont have an account?"}
              <span
                className="text-[#0056B3] hover:text-slate-400 font-bold cursor-pointer"
                onClick={() => setSwitchForm(!switchForm)}
              >
                {switchForm ? "Sign-In" : "Sign-Up"}
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
