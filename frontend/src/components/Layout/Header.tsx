// import React from 'react'
// import { Layout, Avatar } from 'antd'
// import Colors from '../../config/colors'
// import Button from '../Button'
// import { useNavigate } from 'react-router'


// // REACT ICONS
// import { UserOutlined } from '@ant-design/icons';



// const NavHeader = () => {
//     const { Header } = Layout;
//     const navigate = useNavigate();
//     const userData = JSON.parse(localStorage.getItem('user'));
//     return (
//         <Header
//             className='flex justify-end items-center py-0 px-4'
//             style={{
//                 background: Colors.White,
//             }}
//         >

//             <Button.Basic
//                 onClick={() => navigate('/user-profile')}
//                 className="flex items-center gap-1"
//                 buttonStyle={{border:'1px solid #E2EECA',height:'50px'}}
//                 icon={userData?.imageUrl ? <Avatar size={'large'} src={userData?.imageUrl} /> : <Avatar size={'large'} icon={<UserOutlined />} />}
//                 text={userData?.username ? userData?.username : 'Admin'} 
//                 size={'large'} 
//             />

//         </Header>
//     )
// }

// export default NavHeader

// // user-button flex items-center justify-center h-14 gap-1.5

import React from 'react';
import { Layout,  } from 'antd';
import Colors from '../../config/colors/index.ts';
import Button from '../Button';
import Avatar from '../Avatar';
import text from '../Text';
import { useNavigate } from 'react-router-dom';
import { userProfile } from '../../assets/images/userProfile.png';
import logo from '../../assets/images/logo.png'


// REACT ICONS
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const NavHeader: React.FC = () => {
  const { Header } = Layout;
  const navigate = useNavigate();
  // const userData = JSON.parse(localStorage.getItem('user') || '{}');

  const userData = useSelector((state) => state?.AppReducer?.userData);
    // console.log('name', name)
  return (
    
    <Header
      className='flex justify-end items-center py-0 px-4'
      
      style={{
        // background: Colors.White,
        background:"#19212D",
        borderBottom: '2px solid #161616',
        boxShadow: `
        2px 3px 2px rgba(3, 7, 18, 0.03),
        6px 11px 9px rgba(3, 7, 18, 0.06),
        14px 25px 19px rgba(3, 7, 18, 0.08),
        24px 44px 34px rgba(3, 7, 18, 0.11)
      `,
        // border:'1px solid red'

      }}
    >
      <div className='flex items-center'>

        {/* <Button.Basic
          // onClick={() => navigate('/user-profile')}
          className="flex items-center gap-1"
          buttonStyle={{ border: '0px solid #E2EECA', height: '50px' }}
          icon={userData?.imageUrl ? <Avatar size={'large'} src={userData.imageUrl} /> : <Avatar size={'large'} icon={<UserOutlined />} />}
          // icon={<Avatar size={'large'} src={userProfile} />}
          // text={userData?.username ? userData.username : 'Admin'}
          size={'large'}
        /> */}
        {userData?.imageUrl ? <Avatar.Basic src={userData.imageUrl} className='w-10 h-10' /> : <Avatar.Basic icon={<UserOutlined />} className='w-10 h-10' />}
        <div className='flex flex-col ml-2 mr-4'>
          <text.Basic className='font-bold text-xs inline text-[#88939F]' text={userData?.name ? userData?.name : 'James William'} />
          <text.Basic className='font-semibold text-xs inline' style={{ color: "#88939F" }} text={userData?.username ? userData?.username : 'Admin'} />
        </div>
      </div>
    </Header>
    
  );
};

export default NavHeader;
