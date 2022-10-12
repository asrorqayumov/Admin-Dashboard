import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns, UserRows } from "../../datatablesource";

export const Datatable = () => {
  return (
    <div className="datatable">
      {" "}
      <DataGrid
        rows={UserRows}
        columns={UserColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
