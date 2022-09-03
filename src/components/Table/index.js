import React from "react";
import { useTable, usePagination, useRowSelect } from "react-table";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Table = (props) => {
  const columns = React.useMemo(() => [...props.columns], []);
  return (
    <div className="px-2 my-4">
      <RenderTable columns={columns} data={props.data} />
    </div>
  );
};

function RenderTable({ columns, data }) {
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
              <tr {...row.getRowProps()} className="hover:bg-grey rounded-sm">
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
              canPreviousPage && "hover:bg-grey"
            } p-2 mx-1 rounded-full`}
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`${
              canNextPage && "hover:bg-grey"
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
