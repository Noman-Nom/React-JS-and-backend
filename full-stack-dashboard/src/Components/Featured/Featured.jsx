import React from 'react'
import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='Featured'>
      
      <div className="top">
          <h1 className="title">University Survey</h1>
          <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          < CircularProgressbar className='icon' value={"79"} text='78%' strokeWidth={7}  styles={buildStyles({
            pathColor: 'rgb(108, 49, 49)',
            textColor: 'black',
            trailColor: '#d6d6d6',
            
          })} />

        </div>
        <p className="title">Total Assesments Enter Last Month</p>
        <p className="amount">780</p>

      </div>
    </div>
  )
}

export default Featured