import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import { sidebarContent } from "../../constants/sidebar";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { MdPersonOff, MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

// temp data below
const columns = [
  {
    Header: "S.NO",
    accessor: "sno",
    minWidth: 100,
  },
  {
    Header: "First Name",
    accessor: "firstName",
    minWidth: 100,
  },
  {
    Header: "Last Name",
    accessor: "lastName",
    minWidth: 100,
  },
  {
    Header: "Age",
    accessor: "age",
    minWidth: 100,
  },
  {
    Header: "Phone Number",
    accessor: "ph",
    minWidth: 150,
  },
  {
    Header: "Email",
    accessor: "email",
    minWidth: 100,
  },
  {
    Header: "Actions",
    accessor: "actions",
    minWidth: 100,
  },
];
const tempData = [
  {
    sno: 0,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
  },
  {
    sno: 1,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
  },
  {
    sno: 2,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
  },
  {
    sno: 3,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
  },
  {
    sno: 4,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
  },
  {
    sno: 5,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
  },
  {
    sno: 6,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
  },
  {
    sno: 7,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
  },
  {
    sno: 8,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
  },
  {
    sno: 9,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
  },
  {
    sno: 10,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
  },
  {
    sno: 11,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
  },
  {
    sno: 12,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
  },
  {
    sno: 13,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
  },
];

// till here

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState(null);

  const theme = useSelector((state) => state?.theme);

  useEffect(() => {
    tempData.map((d, index) => {
      d["actions"] = [<Elem key={index} index={index} />];
    });
    setData(tempData);
  });

  const handleActionClick = (action, index) => {
    console.log("Action : ", action);
    console.log("Index : ", index);
  };

  const Elem = ({ index }) => {
    return (
      <span className="flex" key={index}>
        <AiFillEdit
          size={20}
          className="mx-2 hover:text-blue"
          onClick={() => handleActionClick("edit", index)}
        />
        <AiFillEye
          size={20}
          className="mx-2 hover:text-blue"
          onClick={() => handleActionClick("view", index)}
        />
        <MdPersonOff
          size={20}
          className="mx-2 hover:text-blue"
          onClick={() => handleActionClick("person", index)}
        />
        <MdDelete
          size={20}
          className="mx-2 hover:text-blue"
          onClick={() => handleActionClick("delete", index)}
        />
      </span>
    );
  };

  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={`flex`}>
      <Sidebar
        showSidebar={showSidebar}
        sidebarData={sidebarContent}
        toggleShowSidebar={toggleShowSidebar}
      />
      <div
        className={`transition duration-500 p-4 flex-1 h-screen	overflow-y-auto overflow-x-hidden	scroll-smooth ${
          theme === "light" ? "bg-light" : "bg-dark text-white"
        }`}
      >
        <Navbar toggleShowSidebar={toggleShowSidebar} />
        <SecondaryNavbar title="Candidates" btnTitle="Add" />
        <div className={`my-8 mb-10`}>
          {["Live", "Scheduled", "Expired"].map((item, ind) => {
            return (
              <span
                key={`span ${ind}`}
                className={`mx-2 transition duration-500 text-xl py-2 ${
                  ind === selectedIndex
                    ? `${
                        theme === "light"
                          ? "text-dark_grey border-dark_grey"
                          : "text-white border-white"
                      } border-b-2 `
                    : "text-grey_text"
                } cursor-pointer`}
                onClick={() => setSelectedIndex(ind)}
              >
                {item}
              </span>
            );
          })}
        </div>
        {data && <Table theme={theme} columns={columns} data={data} />}
      </div>
    </div>
  );
};

export default Dashboard;
