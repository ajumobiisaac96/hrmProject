import React from 'react'
import Sidebar from '../components/Sidebar'
// import test from '../assets/test.png'
import '../pages/EmployeeManagment.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const EmployeeManagment = () => {
  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default EmployeeManagment
