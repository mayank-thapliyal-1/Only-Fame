import React, { useState } from 'react'
import Sidebar from '../pages/Profile/Sidebar'
import Cateogry from '../pages/Profile/Cateogry'
import Profile from '../pages/Profile/Profile.jsx'
import ProfileInfo from '../pages/Profile/ProfileInfo.jsx'

const ProfileSection = () => {
  const [pos,setPos] = useState(1);
  const [change,setChange]=useState(true);
  return (
    <div className='flex w-screen h-screen overflow-hidden'>
      <Sidebar setPos={setPos} Pos={pos} Change={change} setChnage={setChange} />
       {pos==1?<Profile/>:pos==2?<ProfileInfo/>:<Cateogry/>}   
    </div>
  )
}

export default ProfileSection