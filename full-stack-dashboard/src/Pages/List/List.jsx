import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import './List.scss'
import DataTable from '../../Components/DataTable/DataTable'

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable />
      </div>
      
    </div>
  )
}

export default List