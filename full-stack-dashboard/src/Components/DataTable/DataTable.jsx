import React from 'react'
import './DataTable.scss'

import { DataGrid } from '@mui/x-data-grid';
import { userColums, userData } from '../../DataTableSource';




const DataTable = () => {

  // Actions

      const actionColumn=[
        {
          field: "action",
          headerName:"Action",
          width:200,
          renderCell:()=>{
            return(
              <div className="cellAction">
        <button className="viewButton">View</button>
        <button className="deleteButton">Delete</button>
      </div>
            )
          }
        }
      ]

  return (
    <div className='dataTable' style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={userData}
      columns={userColums.concat(actionColumn)}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
  )
}

export default DataTable