import { SubmitHandler, useForm } from "react-hook-form";
import { AuthCredential, LoginFormProps } from "../../../types/auth/auth";
import InputWithLabel from "../elm/InputWithLabel";

const ResetPasswordForm: React.FC<LoginFormProps> = ({ submitForm }) => {
  const { register, handleSubmit } = useForm<AuthCredential>();

  const handleFormSubmit: SubmitHandler<AuthCredential> = (
    data: AuthCredential
  ) => {
    submitForm(data);
  };

  return (
    <form
      className="space-y-4 text-pinkPrimary"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <InputWithLabel
        label="New Password"
        type="password"
        id="new-password"
        {...register("password", { required: true })}
        placeholder="Enter New Password..."
        required
      />

      <InputWithLabel
        label="Confirm Password"
        type="password"
        id="confirm-password"
        {...register("password", { required: true })}
        placeholder="Enter Confirm Password..."
        required
      />

      <div>
        <button
          type="reset"
          className="flex w-full justify-center rounded-3xl bg-pinkPrimary px-3 py-2 text-md font-semibold leading-6 text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
