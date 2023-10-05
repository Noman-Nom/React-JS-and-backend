import React from 'react'
import './Widgets.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';



const Widgets = ({type}) => {
 let data;

 switch(type){
    case "students":
        data= {
            title :"STUDENTS",
           
            link: "See All  Students",
            icon: <AccountBoxIcon className='icon'/>
        };
        break;
    case "courses":
        data= {
            title :"COURSES",
            
            link: "See All  Courses",
            icon: < MenuBookIcon className='icon' />
        };
        break;
    case "teacher":
        data= {
            title :"TEACHERS",
          
            link: "See All  Teachers",
            icon: <PersonIcon className='icon'/>
        };
        break;
    case "registrations":
        data= {
            title :"REGISTRATIONS",
          
            link: "See All Registrations",
            icon: <PersonIcon className='icon'/>
        };
        break;
        default:
            break;

 }

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
                <AccountBoxIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widgets