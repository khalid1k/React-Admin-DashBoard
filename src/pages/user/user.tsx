import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/dataTable";
import "./user.scss";
import { userRows } from "../../data";
import { useState } from "react";
import Adduser from "../../components/Add/add";
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
        field:"img", headerName:"img", width:70,
        renderCell:(params)=>{
            return <img src={params.row.img || "/noPic"} alt="" />
        }
    },
    // {
    //     field:"Actions", headerName:"Actions", width:100,
    //     renderCell:(params)=>{
    //         return <div className="action">
    //             <div className="view">view</div>
    //             <div className="delete">delete</div>
    //         </div>
    //     }
    // },
    

    {
      field: 'firstName',
      headerName: 'First name',
      width: 110,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 110,
      editable: true,
    },
    
    
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 130,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 170,
        editable: true,
      },
      {
        field: 'phone',
        headerName: 'Phone',
        type: 'string',
        width: 100,
        editable: true,
      },
    {
        field:"verified", headerName:"Verified", width:60, type:"boolean",
        
    },
  ];
  
  
  
const User=()=>{
    const [open, setOpen]=useState(false);
    return(
        <div className="user">
            <div className="info">
                <h1>Users</h1>
                
                <button onClick={()=>setOpen(true)}>Add new user </button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows}/>
            {open && <Adduser setOpen={setOpen} slug="user" columns={columns}/>}
        </div>
    )
}
export default User;