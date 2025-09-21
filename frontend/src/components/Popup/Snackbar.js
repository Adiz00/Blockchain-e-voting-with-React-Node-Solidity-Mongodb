// import React, { Component } from 'react';
// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
// import { render } from '@testing-library/react';

// class SimpleSnackbar extends Component {

//     constructor() {
//         super()
//         this.state = {
//             open: false,
//             vertical: 'top',
//             horizontal: 'center',
//             severity: "success",
//             message: "",
//             style: {},
//             sx: {}
//         }
//     }

//     hide = () => {
//         this.setState({ open: false });
//     };

//     render() {
//         const { message, vertical, horizontal, open, severity, style, sx } = this.state;
//         return (
//             <Snackbar
//                 autoHideDuration={3000}
//                 anchorOrigin={{ vertical, horizontal }}
//                 open={open}
//                 onClose={this.hide}
//             >
//                 <Alert
//                     severity={severity} // success | warning | info | error
//                     style={style}
//                     sx={sx}
//                 >
//                     {message}
//                 </Alert>
//             </Snackbar >
//         );
//     }
// }

// export default SimpleSnackbar