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
  },
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Phone Number",
    accessor: "ph",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Actions",
    accessor: "actions",
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
      d["actions"] = [<Elem index={index} />];
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

  return (
    <div className={`flex`}>
      <section
        className={`transition duration-300 md:translate-x-0 md:relative -translate-x-full absolute z-50 min-w-max ${
          showSidebar ? "translate-x-0" : ""
        }`}
      >
        <Sidebar
          sidebarData={sidebarContent}
          toggleShowSidebar={toggleShowSidebar}
        />
      </section>
      <div
        className={`transition duration-500 p-4 flex-1 h-screen	overflow-y-auto overflow-x-hidden	scroll-smooth ${
          theme === "light" ? "bg-light" : "bg-dark text-white"
        }`}
      >
        <Navbar toggleShowSidebar={toggleShowSidebar} />
        <SecondaryNavbar title="Candidates" btnTitle="Add" />
        {data && <Table theme={theme} columns={columns} data={data} />}
      </div>
    </div>
  );
};

export default Dashboard;
