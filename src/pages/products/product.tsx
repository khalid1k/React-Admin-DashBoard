import { useState } from "react";
import "./product.scss";
import DataTable from "../../components/dataTable/dataTable";
import Adduser from "../../components/Add/add";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
        field:"img", headerName:"img", width:70,
        renderCell:(params)=>{
            return <img src={params.row.img || "/noPic"} alt="" />
        }
    },
    
    {
      field: 'title',
      headerName: 'Title',
      width: 120,
      type: "string",
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 120,
        type: "string",
      },
    
    
    {
        field: 'price',
        headerName: 'Price',
        type: 'string',
        width: 100,
        
      },
      
    {
        field:"producer", headerName:"Producer", width:70, type:"string",
        
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'string',
        width: 100,
        editable: true,
      },
      {
        field: 'inStock',
        headerName: 'in Stock',
        type: 'string',
        width: 100,
        editable: true,
      },
]
const Product=()=>{
    const [open, setOpen]=useState(false);
    return(
        <div className="products">
            <div className="info">
                <h1>Products</h1>
                
                <button onClick={()=>setOpen(true)}>Add new Product </button>
            </div>
            <DataTable slug="products" columns={columns} rows={products}/>
            {open && <Adduser setOpen={setOpen} slug="Product" columns={columns}/>}
        </div>
    )
}
export default Product;