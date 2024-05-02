import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";


interface FormInputs {
  email: string;
  name?: string;
  password: string;
  confirmPassword: string;
  profilePic?: string;
}

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormInputs>();

  const handleSignUp: SubmitHandler<FormInputs> = async (data) => {
    try {
     const userInfo=data

     const res=await 

    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }
  };

  const password = watch("password");

  return (
    <section>
      <form
        className="flex flex-col items-center justify-center max-w-md mx-auto"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <label className="form-control w-full  mx-auto px-6 pb-10 pt-5 bg-gray-700">
          <div className="label">
            <span className="label-text text-white font-semibold">Email</span>
          </div>
          <input
            required
            type="email"
            placeholder="Type here"
            className="input input-bordered input-accent w-full "
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-error">{errors.email.message}</span>
          )}
        </label>
        <label className="form-control w-full  mx-auto px-6 py-3 bg-gray-700">
          <div className="label">
            <span className="label-text text-white font-semibold">Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full "
            {...register("name")}
          />
        </label>
        <label className="form-control w-full  mx-auto px-6 py-3 bg-gray-700 ">
          <div className="label">
            <span className="label-text text-white font-semibold">
              Password
            </span>
          </div>
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Type here"
              className="input input-bordered input-accent w-full "
              {...register("password", { required: "Password is required" })}
            />
            <span
              className="absolute right-1 bottom-1/3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoEyeOff className="text-2xl font-bold" />
              ) : (
                <IoEye className="text-2xl font-bold" />
              )}
            </span>
          </div>
          {errors.password && (
            <span className="text-error">{errors.password.message}</span>
          )}
        </label>

        <label className="form-control w-full  mx-auto px-6 py-3 bg-gray-700 ">
          <div className="label">
            <span className="label-text text-white font-semibold">
              Confirm Password
            </span>
          </div>
          <div className="relative">
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Type here"
              className="input input-bordered input-accent w-full "
              {...register("confirmPassword", {
                required: "Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <span
              className="absolute right-1 bottom-1/3 cursor-pointer"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? (
                <IoEyeOff className="text-2xl font-bold" />
              ) : (
                <IoEye className="text-2xl font-bold" />
              )}
            </span>
          </div>
          {errors.confirmPassword && (
            <span className="text-error">{errors.confirmPassword.message}</span>
          )}
        </label>
        <label className="form-control w-full mx-auto px-6 py-3 bg-gray-700">
          <div className="label">
            <span className="label-text text-white font-semibold">
              Profile Pic
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full "
            {...register("profilePic")}
          />
          {errors.profilePic && (
            <span className="text-error">{errors.profilePic.message}</span>
          )}
        </label>
        <button
          role="button"
          type="submit"
          className="btn btn-block px-4 py-2 text-center bg-blue-500 "
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Home;
