import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns, UserRows } from "../../datatablesource";

export const Datatable = () => {

  const actionColumn = [{
    field:'action',
    headerName:'Action',
    width:200,
    renderCell:()=>{
      return(
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }
  }];

  return (
    <div className="datatable">
      <DataGrid
        rows={UserRows}
        columns={UserColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
