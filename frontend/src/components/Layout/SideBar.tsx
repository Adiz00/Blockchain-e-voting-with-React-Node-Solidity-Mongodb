// import React, { useState } from 'react'
// import { Layout, Menu, ConfigProvider } from 'antd'
// import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png'
// import icon from '../../assets/images/icon.png'
// import event from '../../assets/images/event.png'
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppAction } from '../../store/actions'
// import BasicModal from '../../components/Modal/BasicModal'

// // ICONS IMPORT
// import { RxDashboard } from "react-icons/rx";
// import { LuUsers } from "react-icons/lu";
// import { FaUserFriends } from "react-icons/fa";

// import { CiMemoPad } from "react-icons/ci";
// import { FaShieldAlt } from "react-icons/fa";
// import { BsCalendar2EventFill } from "react-icons/bs";
// import { IoLogOutSharp } from "react-icons/io5";
// import { IoMdChatbubbles } from "react-icons/io";
// import Colors from '../../config/colors';


// const SideBar = () => {

//     const { Sider } = Layout;
//     const [collapsed, setCollapsed] = useState(false);
//     const [logoutModal, setLogoutModal] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const location = useLocation();
//     const user = useSelector((state) => state.AppReducer);
//     const currentLocation = location?.pathname;

//     // console.log("Location",location.pathname)

//     // console.log("Location",window.location.pathname);
//     console.log("current location", currentLocation)


//     const logoutModalViewer = () => {
//         setLogoutModal(true);
//     }


//     const logOut = () => {
//         dispatch(AppAction.Logout(() => {
//             localStorage.removeItem('authToken');
//             navigate('/login')
//         }))

//     }





//     return (
//         <>
//             <Sider
//                 trigger={null}
//                 collapsible
//                 collapsed={collapsed}
//                 className=''
//                 style={{
//                     overflow: 'auto',
//                     height: '100vh',
//                     position: 'fixed',
//                     left: 0,
//                     top: 0,
//                     bottom: 0,
//                 }}

//                 theme='light'
//                 breakpoint='lg'
//                 onCollapse={() => setCollapsed(!collapsed)}
//                 width={240}
//             >

//                 <div className="demo-logo-vertical" />
//                 <ConfigProvider
//                     theme={{
//                         components: {
//                             Menu: {
//                                 // Background color of menu item when selected
//                                 itemSelectedBg: '',
//                                 // Color of selected menu item text	
//                                 itemSelectedColor: ''
//                             },
//                         },
//                     }}
//                 >

//                     <Menu
//                         theme="light"
//                         mode="inline"
//                         defaultSelectedKeys='1'
//                         className='h-full'
//                         style={{ height: '90vh' }}
//                     >
//                         {/* have to perform this inline stylng for bg and color , as on refresh of a page it will make the key = 1 and set the bg and color for dashboard whereas our current location is still pointing to where we are previously standing e.g user management */}
//                         <>
//                             {collapsed ?
//                                 <Link to="/">
//                                     <img className='w-14 h-14 mt-4 ml-4' src={icon} />
//                                 </Link>
//                                 :
//                                 <Link to="/">
//                                     <img className='mt-4 w-full h-11 py-0 px-2 mb-6' src={logo} />
//                                 </Link>

//                             }

//                             <Menu.Item style={{ background: currentLocation === '/dashboard' ? '#307cae' : '', color: currentLocation === '/dashboard' ? 'white' : '' }} className="menu-item" key="1" icon={<RxDashboard size={20} color={currentLocation === '/dashboard' ? 'white' : Colors.Green} />}>
//                                 <Link to="/">Dashboard</Link>
//                             </Menu.Item>
//                             <Menu.Item style={{ background: currentLocation === '/user-management' ? '#307cae' : '', color: currentLocation === '/user-management' ? 'white' : '' }} className="menu-item" key="2" icon={<FaUserFriends size={20} color={currentLocation === '/user-management' ? 'white' : Colors.Green} />}>
//                                 <Link to="/user-management">Users Management</Link>
//                             </Menu.Item>
//                             <Menu.Item style={{ background: currentLocation === '/content-management' ? '#307cae' : '', color: currentLocation === '/content-management' ? 'white' : '' }} className="menu-item" key="3" icon={<CiMemoPad size={20} color={currentLocation === '/content-management' ? 'white' : Colors.Green} />}>
//                                 <Link to="/content-management">Content Management</Link>
//                             </Menu.Item>
//                             <Menu.Item style={{ background: currentLocation === '/contact' ? '#307cae' : '', color: currentLocation === '/contact' ? 'white' : '' }} className="menu-item" key="4" icon={<FaShieldAlt size={17} color={currentLocation === '/contact' ? 'white' : Colors.Green} />}>
//                                 <Link to="/contact">Contact Support</Link>
//                             </Menu.Item>
//                             <Menu.Item style={{ background: currentLocation === '/event-management' ? '#307cae' : '', color: currentLocation === '/event-management' ? 'white' : '' }} className="menu-item" key="5" icon={<BsCalendar2EventFill size={17} color={currentLocation === '/event-management' ? 'white' : Colors.Green} />}>
//                                 <Link to="/event-management">Events</Link>
//                             </Menu.Item>
//                             <Menu.Item style={{ background: currentLocation === '/forum-management' ? '#307cae' : '', color: currentLocation === '/forum-management' ? 'white' : '' }} className="forum-item" key="6" icon={<IoMdChatbubbles size={17} color={currentLocation === '/forum-management' ? 'white' : Colors.Green} />}>
//                                 <Link to="/forum-management">Forum Management</Link>
//                             </Menu.Item>


//                         </>

//                     </Menu>

//                 </ConfigProvider>



//                 <div className='flex items-center justify-start ml-5 gap-1.5'>
//                     <IoLogOutSharp size={25} color={Colors.Error} />
//                     <span className='cursor-pointer' onClick={logoutModalViewer}>Log Out</span>
//                 </div>

//             </Sider>

//             {

//                 <BasicModal
//                     centered={'centered'}
//                     width={'300px'}
//                     modalType={'basicModal'}
//                     text='Are you sure, you want to logout ?'
//                     descriptionStyle={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: '500', margin: '10px' }}
//                     isModalOpen={logoutModal}
//                     isFooter={true}
//                     leftButtonText='yes'
//                     rightButtonText="no"
//                     rightButtonStyle={{ backgroundColor: 'black', color: 'white' }}
//                     leftButtonStyle={{ backgroundColor: 'green', color: 'white' }}
//                     onClickLeft={logOut} onClickRight={() => setLogoutModal(false)}
//                     onCancel={() => setLogoutModal(false)} />
//             }

//         </>
//     )
// }

// export default SideBar


import React, { useEffect, useState } from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import { Link } from 'react-router-dom';
import Colors from '../../config/colors/index.ts';
import BasicModal from '../Modal/BasicModal.tsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./dashboardLayout.css";

// ICONS IMPORT
import logo from '../../assets/images/logo.png'
import formLogo from '../../assets/images/formLogo.png'
import homeIcon from '../../assets/images/home.svg';
import homeBlackIcon from '../../assets/images/homeblack.png';
import usersIcon from '../../assets/images/users.png';
import usersBlackIcon from '../../assets/images/usersBlack.png';
import contactIcon from '../../assets/images/contact.png';
import contactBlackIcon from '../../assets/images/contactBlack.png';
import emailIcon from '../../assets/images/mail.png';
import emailBlackIcon from '../../assets/images/emailBlack.png';
import settingsIcon from '../../assets/images/settings.png';
import settingsBlackIcon from '../../assets/images/settingsBlack.png';
import logoutBlackIcon from '../../assets/images/logoutBlack.png';
import SubMenu from 'antd/es/menu/SubMenu';
import { signOut } from '@aws-amplify/auth';
import utils from '../../config/util/index.tsx';
// import { Utils } from '../../config/index.js';
import AppAction from '../../store/actions/AppAction.js';
import { Loader } from "../../components/index.js";
// import { useMutation } from "@apollo/client";
// import { logoutMutation } from '../../apollo/mutation.ts';
import { Store } from '../../store/index.js';
import { ro } from 'date-fns/locale';
import { LuLogOut } from "react-icons/lu";
import { Utils } from '../../config/index.js';

const SideBar: React.FC = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [dataLoader, setDataLoader] = useState(false);
  // const [logout, { data, error, loading }] = useMutation(logoutMutation)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state: any) => state.AppReducer);
  const currentLocation = location?.pathname;

  // useEffect(() => {
  //   if (data?.logout?.success) {
  //     setDataLoader(false)
  //     utils.showMessage('success', 'User Logged out Successfully')
  //     console.log('logout data', data)
  //     localStorage.removeItem('user')
  //     dispatch(AppAction.saveUser({ token: "", email: "", role: "" }, () => { }))
  //     dispatch(AppAction.isAuthenticated(false, () => {
  //       navigate('/login');
  //     }))
  //   }
  // }, [data])

  // useEffect(() => {
  //   if (error) {
  //     if (error?.message === "Error: Unauthorized. please sign in again") {
  //       console.log('error in useeffect', error?.message)
  //       setDataLoader(false)
  //       utils.showMessage('error', "Unauthorized user, please sign in again")
  //       localStorage.removeItem('user')
  //       dispatch(AppAction.saveUser({ token: "", email: "", role: "" }, () => { }))
  //       dispatch(AppAction.isAuthenticated(false, () => {
  //         navigate('/login');
  //       }))
  //     }
  //     else{
  //       console.log('error in useeffect', error?.message)
  //       setDataLoader(false)
  //       utils.showMessage('error', error?.message)
  //     }
  //   }
  // }, [error])

  const logoutModalViewer = () => {
    setLogoutModal(true);
  };

  // console.log("user token in appReducer ->> ",Store.getState().AppReducer?.user.replace(/"/g, ''));
  
  async function handleSignOut() {
    setDataLoader(true)
    // gql logout function
    // logout();
    
  }
  const logOut = () => {
    // handleSignOut();

    localStorage.removeItem('token')
    dispatch(AppAction.saveUser({ token: "", email: "", role: "" }, () => { }))
      dispatch(AppAction.isAuthenticated(false, () => {
        navigate('/login');
      }))
      Utils.showMessage('success', 'User Logged out Successfully')
  };

  return (
    <>

    {dataLoader &&
    <Loader.Circular className="loader-overlay" size={60} color={Colors.Green} />
    }
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className=''
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor:"#19212D",
          borderRight:'.1px solid #161616cc',
          boxShadow: `
          2px 3px 2px rgba(3, 7, 18, 0.03),
          6px 11px 9px rgba(3, 7, 18, 0.06),
          14px 25px 19px rgba(3, 7, 18, 0.08),
          24px 44px 34px rgba(3, 7, 18, 0.11)
        `
        }}
        theme='dark'
        
        breakpoint='lg'
        onCollapse={() => setCollapsed(!collapsed)}
        width={240}
      >
        <div className="demo-logo-vertical" />
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                // Background color of menu item when selected
                itemSelectedBg: '',
                // Color of selected menu item text
                itemSelectedColor: ''
              },
            },
          }}
        >
          <Menu
            // theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            className='h-full'
            style={{ height: '90vh', padding: '0px', margin: '0px', backgroundColor:'#19212D' }}
          >
            <>
              {collapsed ?
                <Link to="/">
                  <img className='mt-3 ml-0 h-14 py-0 px-2 mb-6' src={logo} />
                </Link>
                :
                <Link to="/">
                  <div className='flex items-center mt-3 ml-2  py-0 px-2 mb-6 border-0 border-red-500'>
                    <img className='h-14' src={logo} />
                    {/* <div className='h-14'>E</div> */}
                    <img className='ml-1 h-[.9rem]' src={formLogo} alt="" />
                    {/* <div className='ml-1 h-[.9rem]'>VOTE</div> */}
                    
                    {/* <p className='cursor-pointer font-bold text-[1rem]' style={{ color: Colors.Purple }}>Form</p>
                    <p className='cursor-pointer font-bold text-[1rem]' style={{ color: Colors.Black }}>Master</p> */}
                  </div>
                </Link>
              }

              <Menu.Item
                style={{
                  // background: currentLocation === '/dashboard' ? '#307cae' : '',
                  // color: currentLocation === '/dashboard' ? 'white' : '',
                  // margin: '0px',
                  borderRadius: '0px',
                  padding: '0px',
                  height: 'auto',
                  color:''
                }}
                className="menu-item "
                key="1"
              // icon={<RxDashboard size={20} color={currentLocation === '/dashboard' ? 'white' : Colors.Green} />}
              >
                <Link to="/dashboard">
                  <div className="flex items-stretch">
                    <div
                      className='hidden min-[992px]:block'
                      style={{
                        background: currentLocation === '/dashboard' ? Colors.Purple : '',
                        color: currentLocation === '/dashboard' ? Colors.Purple : '',
                        marginRight: '1rem',
                        padding: '.4rem 0.1rem',
                        borderRadius: '0px 5px 5px 0px',
                      }}>.</div>
                    {/* <img src={<RxDashboard size={20} color={currentLocation === '/dashboard' ? 'white' : Colors.Green} />} alt="" /> */}

                    {/* {React.cloneElement(<RxDashboard size={20} color={currentLocation === '/dashboard' ? 'white' : Colors.Green} />)} */}
                    <div style={{
                      background: currentLocation === '/dashboard' ? Colors.Purple : '',
                      color: currentLocation === '/dashboard' ? 'white' : '#fff',
                      marginRight: '.5rem',
                      flexGrow: 1,
                      borderRadius: '5px 5px 5px 5px',
                    }}
                      className="flex items-center justify-start max-[992px]:mx-[.5rem]"
                    >

                      {<img
                        src={currentLocation === '/dashboard' ? homeIcon : homeIcon}
                        // color={currentLocation === '/dashboard' ? 'white' : Colors.Purple}
                        className='inline mx-auto my-[.7rem] min-[992px]:mr-[1.1rem] min-[992px]:ml-[1rem]'
                        style={{
                          display: 'inline', width: '18px',
                          height: '18px',
                          color: currentLocation === '/dashboard' ? 'white' : Colors.Purple,

                        }} />}
                      <div className='hidden min-[992px]:block'>
                        <p className='text-xs font-semibold'>Dashboard</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{
                  // background: currentLocation === '/content-management' ? '#307cae' : '',
                  // color: currentLocation === '/content-management' ? 'white' : '',
                  // margin: '0px',
                  borderRadius: '0px',
                  padding: '0px',
                  height: 'auto',
                }}
                className="menu-item "
                key="2"
              // icon={<RxDashboard size={20} color={currentLocation === '/content-management' ? 'white' : Colors.Green} />}
              >
                <Link to="/profile">
                  <div className="flex items-stretch">
                    <div
                      className='hidden min-[992px]:block'
                      style={{
                        background: currentLocation === '/profile' ? Colors.Purple : '',
                        color: currentLocation === '/profile' ? '#858F9E' : '',
                        marginRight: '1rem',
                        padding: '.4rem 0.1rem',
                        borderRadius: '0px 5px 5px 0px',
                      }}>.</div>
                    {/* <img src={<RxDashboard size={20} color={currentLocation === '/profile' ? 'white' : Colors.Green} />} alt="" /> */}

                    {/* {React.cloneElement(<RxDashboard size={20} color={currentLocation === '/profile' ? 'white' : Colors.Green} />)} */}
                    <div style={{
                      background: currentLocation === '/profile' ? Colors.Purple : '',
                      color: currentLocation === '/profile' ? 'white' : '#fff',
                      marginRight: '.5rem',
                      flexGrow: 1,
                      borderRadius: '5px 5px 5px 5px',
                    }}
                      className="flex items-center justify-start max-[992px]:mx-[.5rem]"
                    >

                      {<img
                        src={currentLocation === '/profile' ? usersIcon : usersIcon}
                        // color={currentLocation === '/profile' ? 'white' : Colors.Purple}
                        className='inline mx-auto my-[.7rem] min-[992px]:mr-[1.1rem] min-[992px]:ml-[1rem]'
                        style={{
                          display: 'inline', width: '18px',
                          height: '18px',
                          color: currentLocation === '/profile' ? 'white' : Colors.Purple,

                        }} />}
                      <div className='hidden min-[992px]:block'>
                        <p className='text-xs font-semibold'>My Profile</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{
                  // background: currentLocation === '/dashboard' ? '#307cae' : '',
                  // color: currentLocation === '/dashboard' ? 'white' : '',
                  // margin: '0px',
                  borderRadius: '0px',
                  padding: '0px',
                  height: 'auto',
                }}
                className="menu-item "
                key="3"
              // icon={<RxDashboard size={20} color={currentLocation === '/dashboard' ? 'white' : Colors.Green} />}
              >
                <Link to="/wallet">
                  <div className="flex items-stretch">
                    <div
                      className='hidden min-[992px]:block'
                      style={{
                        background: currentLocation === '/wallet' ? Colors.Purple : '',
                        color: currentLocation === '/wallet' ? Colors.Purple : '',
                        marginRight: '1rem',
                        padding: '.4rem 0.1rem',
                        borderRadius: '0px 5px 5px 0px',
                      }}>.</div>
                    {/* <img src={<RxDashboard size={20} color={currentLocation === '/wallet' ? 'white' : Colors.Green} />} alt="" /> */}

                    {/* {React.cloneElement(<RxDashboard size={20} color={currentLocation === '/wallet' ? 'white' : Colors.Green} />)} */}
                    <div style={{
                      background: currentLocation === '/wallet' ? Colors.Purple : '',
                      color: currentLocation === '/wallet' ? 'white' : '#fff',
                      marginRight: '.5rem',
                      flexGrow: 1,
                      borderRadius: '5px 5px 5px 5px',
                    }}
                      className="flex items-center justify-start max-[992px]:mx-[.5rem]"
                    >

                      {<img
                        src={currentLocation === '/wallet' ? contactIcon : contactIcon}
                        // color={currentLocation === '/wallet' ? 'white' : Colors.Purple}
                        className='inline mx-auto my-[.7rem] min-[992px]:mr-[1.1rem] min-[992px]:ml-[1rem]'
                        style={{
                          display: 'inline', width: '18px',
                          height: '18px',
                          color: currentLocation === '/wallet' ? 'white' : Colors.Purple,

                        }} />}
                      <div className='hidden min-[992px]:block'>
                        <p className='text-xs font-semibold'>Wallet</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{
                  // background: currentLocation === '/dashboard' ? '#307cae' : '',
                  // color: currentLocation === '/dashboard' ? 'white' : '',
                  // margin: '0px',
                  borderRadius: '0px',
                  padding: '0px',
                  height: 'auto',
                }}
                className="menu-item "
                key="4"
              // icon={<RxDashboard size={20} color={currentLocation === '/dashboard' ? 'white' : Colors.Green} />}
              >
                <Link to="/email-management">
                  <div className="flex items-stretch">
                    <div
                      className='hidden min-[992px]:block'
                      style={{
                        background: currentLocation === '/email-management' ? Colors.Purple : '',
                        color: currentLocation === '/email-management' ? Colors.Purple : '',
                        marginRight: '1rem',
                        padding: '.4rem 0.1rem',
                        borderRadius: '0px 5px 5px 0px',
                      }}>.</div>
                    {/* <img src={<RxDashboard size={20} color={currentLocation === '/email-management' ? 'white' : Colors.Green} />} alt="" /> */}

                    {/* {React.cloneElement(<RxDashboard size={20} color={currentLocation === '/email-management' ? 'white' : Colors.Green} />)} */}
                    <div style={{
                      background: currentLocation === '/email-management' ? Colors.Purple : '',
                      color: currentLocation === '/email-management' ? 'white' : '#fff',
                      marginRight: '.5rem',
                      flexGrow: 1,
                      borderRadius: '5px 5px 5px 5px',
                    }}
                      className="flex items-center justify-start max-[992px]:mx-[.5rem]"
                    >

                      {<img
                        src={currentLocation === '/email-management' ? emailIcon : emailIcon}
                        // color={currentLocation === '/email-management' ? 'white' : Colors.Purple}
                        className='inline mx-auto my-[.7rem] min-[992px]:mr-[1.1rem] min-[992px]:ml-[1rem]'
                        style={{
                          display: 'inline', width: '18px',
                          height: '18px',
                          color: currentLocation === '/email-management' ? 'white' : Colors.Purple,

                        }} />}
                      <div className='hidden min-[992px]:block'>
                        <p className='text-xs font-semibold'>Voting</p>
                      </div>
                      
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              {/* <SubMenu
                style={{
                  
                  borderRadius: '0px',
                  padding: '0px',
                  height: 'auto',
                  width: 'auto',
                }}
                className="menu-item "
                key="5"
                title={
                  <Link to="/settings/sub-admin-management">
                  <div className="flex items-stretch">
                    <div
                      className='hidden min-[992px]:block'
                      style={{
                        background: currentLocation === '/settings/sub-admin-management' || currentLocation === '/settings/change-password' ? Colors.Purple : '',
                        color: currentLocation === '/settings/sub-admin-management' || currentLocation === '/settings/change-password' ? Colors.Purple : '',
                        marginRight: '1rem',
                        padding: '.4rem 0.1rem',
                        borderRadius: '0px 5px 5px 0px',
                      }}>.</div>

                    <div style={{
                      background: currentLocation === '/settings/sub-admin-management' || currentLocation === '/settings/change-password' ? Colors.Purple : '',
                      color: currentLocation === '/settings/sub-admin-management' || currentLocation === '/settings/change-password' ? 'white' : '#858F9E',
                      flexGrow: 1,
                      borderRadius: '5px 5px 5px 5px',
                    }}
                      className="flex items-center justify-start max-[992px]:mx-[.5rem]"
                    >

                      {<img
                        src={currentLocation === '/settings/sub-admin-management' || currentLocation === '/settings/change-password' ? settingsIcon : settingsIcon}
                        className='inline mx-auto my-[.7rem] min-[992px]:mr-[1.1rem] min-[992px]:ml-[1rem]'
                        style={{
                          display: 'inline', width: '18px',
                          height: '18px',
                          color: currentLocation === '/settings/sub-admin-management' || currentLocation === '/settings/change-password' ? 'white' : Colors.Purple,

                        }} />}
                      <div className='hidden min-[992px]:block'>
                        <p className='text-xs font-semibold'>Settings</p>
                      </div>
                     
                    </div>
                  </div>
                </Link>
                }

              >
                <Menu.Item key="5.1" >
                  <Link to="/settings/sub-admin-management" className='px-2 min-[991px]:pl-[3rem] text-xs font-semibold'>
                    Sub Admin Management
                  </Link>
                </Menu.Item>
                <Menu.Item key="5.2" >
                  <Link to="/settings/change-password" className='px-2 min-[991px]:pl-[3rem] text-xs font-semibold'>
                    Change Password
                  </Link>
                </Menu.Item>
                
              </SubMenu> */}

              {/* <Menu.Item
                style={{
                  background: currentLocation === '/user-management' ? '#307cae' : '',
                  color: currentLocation === '/user-management' ? 'white' : ''
                }}
                className="menu-item"
                key="2"
                icon={<FaUserFriends size={20} color={currentLocation === '/user-management' ? 'white' : Colors.Green} />}
              >
                <Link to="/user-management">Users Management</Link>
              </Menu.Item>
              <Menu.Item
                style={{
                  background: currentLocation === '/content-management' ? '#307cae' : '',
                  color: currentLocation === '/content-management' ? 'white' : ''
                }}
                className="menu-item"
                key="3"
                icon={<CiMemoPad size={20} color={currentLocation === '/content-management' ? 'white' : Colors.Green} />}
              >
                <Link to="/content-management">Content Management</Link>
              </Menu.Item>
              <Menu.Item
                style={{
                  background: currentLocation === '/contact' ? '#307cae' : '',
                  color: currentLocation === '/contact' ? 'white' : ''
                }}
                className="menu-item"
                key="4"
                icon={<FaShieldAlt size={17} color={currentLocation === '/contact' ? 'white' : Colors.Green} />}
              >
                <Link to="/contact">Contact Support</Link>
              </Menu.Item>
              <Menu.Item
                style={{
                  background: currentLocation === '/event-management' ? '#307cae' : '',
                  color: currentLocation === '/event-management' ? 'white' : ''
                }}
                className="menu-item"
                key="5"
                icon={<BsCalendar2EventFill size={17} color={currentLocation === '/event-management' ? 'white' : Colors.Green} />}
              >
                <Link to="/event-management">Events</Link>
              </Menu.Item>
              <Menu.Item
                style={{
                  background: currentLocation === '/forum-management' ? '#307cae' : '',
                  color: currentLocation === '/forum-management' ? 'white' : ''
                }}
                className="forum-item"
                key="6"
                icon={<IoMdChatbubbles size={17} color={currentLocation === '/forum-management' ? 'white' : Colors.Green} />}
              >
                <Link to="/forum-management">Forum Management</Link>
              </Menu.Item> */}
            </>
          </Menu>
        </ConfigProvider>

        <div className='flex items-center justify-start cursor-pointer m-auto min-[992px]:ml-6 gap-1.5' onClick={logoutModalViewer}>
          {/* <IoLogOutSharp size={25} color={Colors.Error} /> */}
          <div
            className='inline mx-auto my-[.7rem] min-[992px]:mr-[.6rem] min-[992px]:ml-[1rem]'
            style={{
              display: 'inline', width: '18px',
              // height: '18px',
              color: 'white',

            }}>
              <LuLogOut />
            </div>
          <span className='hidden min-[992px]:block text-xs font-semibold text-[#fff]' >Log Out</span>
        </div>
      </Sider>

      <BasicModal
        className='w-[25rem] text-center bg-black text-white'
        centered={true}
        width={'27rem'}
        modalType={'basicModal'}
        title='Logging Out'
        text='Are you sure, you want to logout?'
        descriptionStyle={{ textAlign: 'center', fontSize: '1rem', fontWeight: '500', marginTop: 'rem', marginBottom: '1.5rem' }}
        isModalOpen={logoutModal}
        isFooter={true}
        leftButtonText='Cancel'
        rightButtonText="Yes"
        rightButtonStyle={{ backgroundColor: '#ef3826', color: 'white', borderRadius: '5px', fontSize: '.9rem' }}
        leftButtonStyle={{  backgroundColor: '#D9D9D9', color: 'black',  borderRadius: '5px',  fontSize: '.9rem' }}
        onClickLeft={()=>setLogoutModal(false)}
        onClickRight={logOut}
        onCancel={() => setLogoutModal(false)}
        
      />
    </>
  );
}

export default SideBar;
