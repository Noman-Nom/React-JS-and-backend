import React from 'react'
import './Table.scss'

const Table = () => {
//  dummy  and static data 

const rows = [
  {
    id: 1,
    rollNo: "19B-013-CE",
    name:"Muhammad Noman",
    img: "/noman.jpg",
    bath: "2020",
    sumester: '7th',
    field: 'El-CSE',
    status: "Approved"



  },
  {
    id: 2,
    rollNo: "20B-038-CE",
    name:"Ayesha Usman",
    img: "/sample.jpg",
    bath: "2020",
    sumester: '7th',
    field: 'El-CSE',
    status: "Approved"



  },
  {
    id: 3,
    rollNo: "20B-029-CE",
    name:"Sheraz Ahmed",
    img: "/noman.jpg",
    bath: "2020",
    sumester: '7th',
    field: 'El-CSE',
    status: "Pending"

  },
  {
    id: 4,
    rollNo: "20B-003-CE",
    name:"Syed Moiz Ali",
    img: "/noman.jpg",
    bath: "2020",
    sumester: '7th',
    field: 'El-CSE',
    status: "Approved"

  },
  {
    id: 5,
    rollNo: "20B-035-CE",
    name:"Raza Muhammad",
    img: "/noman.jpg",
    bath: "2020",
    sumester: '7th',
    field: 'El-CSE',
    status: "Approved"



  },
  {
    id: 6,
    rollNo: "20B-018-CE",
    name:"Zainab",
    img: "/sample.jpg",
    bath: "2020",
    sumester: '7th',
    field: 'El-CSE',
    status: "Pending"



  },
  {
    id: 7,
    rollNo: "20B-025-CE",
    name:"Ibraheem",
    img: "/noman.jpg",
    bath: "2020",
    sumester: '7th',
    field: 'El-CSE',
    status: "Approved"

  },
  {
    id:8 ,
    rollNo: "20B-241-CE",
    name:"Ahmed Raza",
    img: "/noman.jpg",
    bath: "2020",
    sumester: '7th',
    field: 'El-CSE',
    status: "pending"

  },
]

  return (
    <div className='table'>Table</div>
  )
}

export default Table