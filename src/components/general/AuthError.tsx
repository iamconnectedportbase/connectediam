import { PiWarningCircleFill } from "react-icons/pi";

const AuthError = ({ message }: { message: string }) => {
  return (
    <div className="border rounded-md flex items-center overflow-hidden gap-4 my-4">
      <div className="bg-red-500 py-3.5 px-2.5">
        <PiWarningCircleFill className="size-4 text-white" />
      </div>
      <span className="text-sm text-gray-500">{message}</span>
    </div>
  );
};

export default AuthError;
