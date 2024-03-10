import { MdDeleteOutline } from "react-icons/md";

const TodoCard = ({ todo, onDelete }) => {
  return (
    <div>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 h-80 mb-6">
        <div className="p-6">
          <h5 className="flex justify-around mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            <span>{todo.title}</span>
            <span onClick={onDelete}>
              <MdDeleteOutline className="cursor-pointer" size={30} />
            </span>
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {todo.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
