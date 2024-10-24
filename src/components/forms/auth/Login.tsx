import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthCredential, LoginFormProps } from "../../../types/auth/auth";
import Checkbox from "../elm/Checkbox";
import InputWithLabel from "../elm/InputWithLabel";

const LoginForm: React.FC<LoginFormProps> = ({ submitForm }) => {
  const { register, handleSubmit } = useForm<AuthCredential>();

  const handleFormSubmit: SubmitHandler<AuthCredential> = (
    data: AuthCredential
  ) => {
    submitForm(data);
  };

  return (
    <form
      className="space-y-4 text-[#FF6183]"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <InputWithLabel
        label="Email"
        type="email"
        id="email"
        {...register("email", { required: true })}
        placeholder="Enter username ..."
        required
      />

      <InputWithLabel
        label="Password"
        type="password"
        id="password"
        {...register("password", { required: true })}
        placeholder="Enter Your Password.."
        required
      />
      <div className="flex items-center justify-between">
        <Checkbox label="Remember me" id="remember-me" name="remember-me" />
        <div className="text-sm leading-6">
          <Link
            to="/forgot"
            className="font-normal text-sm text-[#FF6183] hover:text-pink-600"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-3xl bg-[#FF6183] px-3 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
