import React from "react";
import ReactTable, { useTable, usePagination, useRowSelect } from "react-table";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Table = (props) => {
  const columns = React.useMemo(() => [...props.columns], []);
  return (
    <div className="px-2 my-4 overflow-x-auto scroll-smooth">
      <RenderTable theme={props?.theme} columns={columns} data={props.data} />
    </div>
  );
};

function RenderTable({ columns, data, theme }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
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
      initialState: { pageSize: 5 },
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
                  className={`border-r-2 py-0 px-2 cursor-pointer ${
                    theme === "light" ? "border-smoke" : "border-white"
                  }`}
                  style={{
                    minWidth: `${column.minWidth}px`,
                    maxWidth: `${column.maxWidth}px`,
                  }}
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
              <tr
                {...row.getRowProps()}
                className="hover:bg-grey hover:text-black"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-4 px-2 cursor-pointer"
                      style={{
                        minWidth: `${cell.column.minWidth}px`,
                        maxWidth: `${cell.column.maxWidth}px`,
                      }}
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
      {/* pagination */}
      <div className="flex justify-end text-sm mt-6 items-center">
        <span className="mx-5">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="flex items-center">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`${
              canPreviousPage && "hover:bg-grey hover:text-black"
            } p-2 mx-1 rounded-full`}
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`${
              canNextPage && "hover:bg-grey hover:text-black"
            } p-2 mx-1 rounded-full`}
          >
            <BiChevronRight />
          </button>
          <span className="ml-3">Rows per page </span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className={`${
              theme === "light" ? "bg-light" : "bg-dark"
            } transition duration-500`}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </span>
      </div>
    </>
  );
}

export default Table;
