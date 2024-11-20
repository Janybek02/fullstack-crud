import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../../store/post/PostSlice";
import { Link } from "react-router-dom";
import { PiUserBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { FaPhoneSquare } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

export const Registration = () => {
  const [registr, setRegistr] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    image: null,
  });
  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    setRegistr({ ...registr, image: e.target.files[0] });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setRegistr({ ...registr, [name]: value });
  };
  const { name, surname, email, phone, password } = registr;
  const handle = (e) => {
    e.preventDefault();
    dispatch(getItems(registr));
    console.log(registr);

    alert("Ваши данные сохранены");
    setRegistr({
      name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    image: null,
    })
  };

  return (
    <div>
      <div className="flex items-center justify-center w-[100%] h-[90%] ">
        <div className="w-[40%] max-w-[1000px]:w-[60%] bg-[#FFFFFF] h-[720px] text-[22px] rounded-[12px] border-[1px] border-[#CCCCCC] shadow-md">
          <Link to={"/"}>
            <IoMdArrowRoundBack className=" text-black m-3" />
          </Link>
          <div className=" flex items-center justify-around flex-col  ">
            <h1 className=" text-[#2B2B2B] ">Create a new account</h1>
            <p className=" text-[#9e9e9e] pt-[7px] text-[15px]">
              Enter your details to registr
            </p>
            <form class="w-[75%] pt-[15px]" onSubmit={handle}>
              <div className="flex items-center justify-between">
                <div class="mb-5 mr-2 w-[90%]">
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <div className="bg-gray-50 border flex items-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <PiUserBold className="text-xl" />
                    <input
                      onChange={onChange}
                      value={name}
                      type="name"
                      id="name"
                      name="name"
                      class=" bg-white ml-2 w-[100%] h-[100%] border-none outline-none"
                      placeholder="Name..."
                      required
                    />
                  </div>
                </div>

                <div class="mb-5 ml-2 w-[90%]">
                  <label
                    for="Surname"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Surname
                  </label>
                  <div class="bg-gray-50 border flex items-center  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <PiUserBold className="text-xl" />
                    <input
                      className="bg-white ml-2 w-[100%] h-[100%] border-none outline-none "
                      onChange={onChange}
                      value={surname}
                      type="text"
                      id="surname"
                      name="surname"
                      placeholder="Surname..."
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-5">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <div class="bg-gray-50 border flex items-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <CgMail className=" text-2xl" />
                    <input
                      onChange={onChange}
                      value={email}
                      type="email"
                      id="email"
                      name="email"
                      className=" bg-white ml-2 w-[100%] h-[100%] border-none outline-none"
                      placeholder="Email..."
                      required
                    />
                  </div>
                </div>
                <div class="mb-5">
                  <label
                    for="phone"
                    class=" mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone
                  </label>
                  <div className="bg-gray-50 flex items-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <FaPhoneSquare className=" text-xl" />
                    <input
                      className=" bg-white ml-2 w-[100%] h-[100%] border-none outline-none"
                      onChange={onChange}
                      value={phone}
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Phone number..."
                      required
                    />
                  </div>
                </div>
                <div class="mb-5">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <div className="bg-gray-50 flex items-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <MdPassword className=" text-xl" />
                    <input
                      onChange={onChange}
                      value={password}
                      type="password"
                      id="password"
                      name="password"
                      className=" bg-white ml-2 w-[100%] h-[100%] border-none outline-none"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <div class="mb-5">
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                </div>
                <div class="flex items-start mb-5">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 "
                    for="file_input"
                  >
                    Upload file
                  </label>
                  <input
                    onChange={handleImageChange}
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                  />
                  <p
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>
                </div>
                <button
                  type="submit"
                  class="text-white bg-gray-700 hover:bg-white focus:ring-4 focus:outline-none hover:text-gray-700 focus:ring-blue-300 font-medium rounded-lg text-sm w-full text-center "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};