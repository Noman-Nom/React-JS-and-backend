import React from 'react'
import './Widgets.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



const Widgets = () => {
  return (
    <div className='widget'>
        <div className="left">
                <span className="title">
                    STUDENTS
                </span>
                <span className="counter">
                    57971
                </span>
                <span className="link">
                    See All Students
                </span>
        </div>
        <div className="right">
            <div className="percentage positive">
         <ArrowUpwardIcon/>
                    20%
            </div>
                <AccountBoxIcon/>
        </div>
    </div>
  )
}

export default Widgets