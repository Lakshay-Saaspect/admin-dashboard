import React from "react";
import { useTable, usePagination, useRowSelect } from "react-table";

const Table = (props) => {
  const columns = React.useMemo(
    () => [
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
    ],
    []
  );
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
  return (
    <div className="px-2 my-4">
      <RenderTable columns={columns} data={tempData} />
    </div>
  );
};

function RenderTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect
  );

  return (
    <>
      <table
        {...getTableProps()}
        className="min-w-full text-left border-collapse"
      >
        <thead className="text-sm">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="border-r-2 border-smoke py-0 px-2 cursor-pointer"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text-sm">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-grey">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-4 px-2 cursor-pointer"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="flex justify-between text-sm mt-6">
        <span className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          <span>
            Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Rows per page {pageSize}
              </option>
            ))}
          </select>
        </span>
      </div>
    </>
  );
}

export default Table;
