import React from 'react'
import './DataTable.scss'

import { DataGrid } from '@mui/x-data-grid';
import { userColums, userData } from '../../DataTableSource';




const DataTable = () => {
  return (
    <div className='dataTable' style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={userData}
      columns={userColums}
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