import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'
import { NavbarLogo } from '../../assets/assets'
import './navbar.css'
const Navbar = () => {

  const [dropDown, setDropDown] = useState(false);


  const handleDropPress = () =>{
    if(dropDown == false){
      setDropDown(true);

    }else {
      setDropDown(false);

    }
  }
  return (
    <nav>
      <div className='navbarWrapperDiv'>
        <div className='logoWrapperDiv'>
          <a href="#"><img src={NavbarLogo} alt="DECEIT2" /></a>
        </div>
        
        <div className='linksWrapper'>
          <ul>
            <li><a href="#">faq</a></li>
            <li><a href="#">Case&nbsp;Files</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Roadmap</a></li>
            <li className='registerBtnNav'><a href="#" className='excludeLinkReg'>register interest</a></li>
          </ul>
        </div>

        <div className='dropDownWrapper'>
            <a href="#" className='mobileDropDown' onClick={handleDropPress}>{dropDown === true ? <MdClose /> : <MdMenu />}</a>
        </div>
      
          <div className={dropDown === true ? 'dropMenuOptions' : 'dropMenuOptions dropMenuOptionsHidden'}>
          <ul>
          <li><a href="#">faq</a></li>
          <li><a href="#">Case&nbsp;Files</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Roadmap</a></li>
          <li className='registerBtnNav'><a href="#" className='excludeLinkReg'>register interest</a></li>
        </ul>
        </div>
        
       </div>
    </nav>
  )
}

export default Navbar