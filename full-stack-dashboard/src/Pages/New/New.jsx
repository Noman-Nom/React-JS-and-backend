import React from 'react'
import './New.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const New = () => {
  return (
    <div className="New">
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>Add New User</h1>
          </div>
          <div className="bottom">
            <div className="left">
                <img src="/noimg.jpg" alt="upload image" />
            </div>
            <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor='file'><CloudUploadIcon/></label>
                    <input type="file" id="file"  />
                  </div>
                  <div className="formInput">
                    <label>User Name</label>
                    <input type="text" placeholder='Enter Name' />
                  </div>
                  <div className="formInput">
                    <label>Roll</label>
                    <input type="text" placeholder='HOD , Engr , Stud' />
                  </div>
                  <div className="formInput">
                    <label>Courses</label>
                    <input type="text" placeholder='Enter Course' />
                  </div>
                  <div className="formInput">
                    <label>Department</label>
                    <input type="text" placeholder='CE , EE or etc' />
                  </div>
                  <div className="formInput">
                    <label>User Type</label>
                    <input type="text" placeholder='User Type' />
                  </div>
                  <div className="formInput">
                    <label>Email</label>
                    <input type="email" placeholder='Enter Email' />
                  </div>
                  <div className="formInput">
                    <label>Password</label>
                    <input type="email" placeholder='123**6**' />
                  </div>
                  <button>Send</button>
                </form>
            </div>
          </div>
        </div>

    </div>
  )
}

export default New