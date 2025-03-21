import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm rounded cursor-pointer font-medium hover:bg-red-800 gap-2
    ">
      <FcGoogle className="text-2xl bg-white rounded-full" />
      Continue With Google
    </button>
  );
}
