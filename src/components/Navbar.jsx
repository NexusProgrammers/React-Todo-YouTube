import { CiCirclePlus } from "react-icons/ci";

const Navbar = ({ onOpen }) => {
  return (
    <div className="bg-gray-800 flex justify-center text-white">
      <button className="p-4" onClick={onOpen}>
        <CiCirclePlus size={40} />
      </button>
    </div>
  );
};

export default Navbar;
