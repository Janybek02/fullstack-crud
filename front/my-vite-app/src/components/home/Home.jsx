import { React, useEffect, useNavigate } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getItemAsync,
  deleteItemsReducer,
} from "../../store/reducers/getSlice";
import { deleteItem } from "../../store/reducers/DeleteSlice";
import { Link } from "react-router-dom";
import { Registration } from "../registration/Registration";
import man from "../../img/man.png";
export const Home = () => {
  const { status, items, error } = useSelector((state) => state.get);
  // const {image} = useSelector((state) => state.image.itmes)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemAsync());
  }, []);

  const deleteItems = (id) => {
      dispatch(deleteItem(id))
      dispatch(deleteItemsReducer(id))
  }

  return (
    <div className="w-[100%] h-[110vh] bg-white-400">
      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        <Link to={"/registration"}>Create new account</Link>
      </button>
      <div className=" grid w-full grid-cols-2 gap-3  xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-3  ">
        {items.map((item) => {
          return (
            <>
              <div
                key={item.id}
                class=" w-[100%]  hover:-translate-y-3 hover:shadow-xl hover:delay-100 hover:duration-100 hover:ease-in   bg-white border border-gray-200 rounded-lg shadow "
              >
                <div class="flex px-4 pt-4">
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    class="inline-block text-gray-500 0 hover:bg-gray-50 "
                    type="button"
                  >
                    <span class="sr-only">Open dropdown</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>

                  <div
                    id="dropdown"
                    class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
                  >
                    <ul class="py-2" aria-labelledby="dropdownButton">
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        >
                          Export Data
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 "
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex flex-col items-center pb-10">
                  <img
                    src={`http://localhost:8080/api/image/${item.id}`}
                    alt={`${item.imageUrl}'s avatar`}
                    class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  />
                  <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </h5>
                  <span class="text-sm text-black">{item.name}</span>
                  <span class="text-sm text-black ">{item.surname}</span>
                  <span class="text-sm text-black ">{item.phone}</span>
                  <div class="flex mt-4 md:mt-6">
                    <button
                      onClick={() => deleteItems(item.id)}
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      Delete
                    </button>
                    <div class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">
                    <Link to={`/change/${item.id}`}>Change</Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
