import { SubmitHandler, useForm } from "react-hook-form";
import { AuthCredential, LoginFormProps } from "../../../types/auth/auth";
import InputWithLabel from "../elm/InputWithLabel";

const ForgotPasswordForm: React.FC<LoginFormProps> = ({ submitForm }) => {
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
        placeholder="Enter Your Email Address..."
        required
      />

      <div>
        <button
          type="reset"
          className="flex w-full justify-center rounded-3xl bg-[#FF6183] px-3 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base"
        >
          Reset Password
        </button>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
