import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import { sidebarContent } from "../../constants/sidebar";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { MdPersonOff, MdDelete } from "react-icons/md";

// temp data below
const Elem = () => {
  return (
    <span className="flex">
      <AiFillEdit size={20} className="mx-2" />
      <AiFillEye size={20} className="mx-2" />
      <MdPersonOff size={20} className="mx-2" />
      <MdDelete size={20} className="mx-2" />
    </span>
  );
};
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
    actions: [<Elem />],
  },
  {
    sno: 1,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 2,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 3,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 4,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 5,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 6,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 7,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 8,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 9,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 10,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 11,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 12,
    firstName: "Lakshay",
    lastName: "Saini",
    age: 24,
    ph: 12345,
    email: "l.saini2501@gmail.com",
    actions: [<Elem />],
  },
  {
    sno: 13,
    firstName: "Nishchay",
    lastName: "Saini",
    age: 22,
    ph: 98765,
    email: "s.nish@gmail.com",
    actions: [<Elem />],
  },
];

// till here

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="flex">
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
      <div className="p-4 flex-1 h-screen	overflow-auto	scroll-smooth">
        <Navbar toggleShowSidebar={toggleShowSidebar} />
        <SecondaryNavbar title="Candidates" btnTitle="Add" />
        <Table columns={columns} data={tempData} />
      </div>
    </div>
  );
};

export default Dashboard;
