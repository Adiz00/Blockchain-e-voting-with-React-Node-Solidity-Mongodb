// import * as yup from "yup";

// // for user login or sign in validation schema
// export const userLogin = yup.object().shape({
//     email: yup.string()
//         .email('Invaild Email')
//         .required('Email is required')
//         .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,'Please enter a valid email'),
//     password: yup.string()
//         .required('Password is required')
//         // .min(8)
//         // .max(32)
//         // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//         // .matches(/[0-9]/, 'Password must contain at least one number')
//         // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')

// });

// // for useremail for forget password
// export const userEmail = yup.object().shape({
//     email: yup.string().email('Invaild Email').required('Email is required'),
// });

// // for password matching in forget password.
// export const passwordVerification = yup.object().shape({
//     password: yup.string()
//         .min(8)
//         .max(32)
//         .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//         .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
//         .matches(/[0-9]/, 'Password must contain at least one number')
//         .required('Password is required'),
//     confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords do not match'),

// });

// // for password reset from profile.
// export const changePassword = yup.object().shape({
//     oldPassword: yup.string()
//         .required('Password is required')
//         // .min(8)
//         // .max(32)
//         // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//         // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
//         // .matches(/[0-9]/, 'Password must contain at least one number')
//         ,

//     newPassword: yup.string()
//         .min(8)
//         .max(32)
//         .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//         .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
//         .matches(/[0-9]/, 'Password must contain at least one number')
//         .required('Password is required'),

//     confirmPassword: yup.string().label('confirm password').required().oneOf([yup.ref('newPassword'), null], 'Passwords do not match'),

// })

import * as yup from "yup";

// TypeScript interface for form values
interface UserLoginValues {
    email: string;
    password: string;
}

interface MailModalValues {
    subject: string;
    message: string;
}

interface voteValues {
    address: string;
    }

interface hoursValues {
    hours: string;
    }

interface candidateFormValues {
    cnic: string;
    phone: string;
    registeredDistrict: string;
    party: string;
    bio: string;
    }

interface voterFormValues {
    cnic: string;
    phone: string;
    registeredDistrict: string;
    }

interface CreateAdminValues {
    name: string;
    email: string;
    password: string;
}
interface EditAdminValues {
    name: string;
    email: string;
}

interface UserEmailValues {
    email: string;
}

interface PasswordVerificationValues {
    password: string;
    confirmPassword: string;
}

interface ChangePasswordValues {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

interface createMailValues {
    emails: string[];
    subject: string;
    message: string;
}

// For user login or sign-in validation schema
export const userLogin: yup.Schema<UserLoginValues> = yup.object().shape({
    email: yup.string()
        .email('Invalid Email')
        .required('Email is required')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/, 'Please enter a valid email'),
    password: yup.string()
        // .min(8, 'Password must be at least 8 characters long')
        // .max(32, 'Password must be at most 32 characters long')
        // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        // .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Password is required'),
    // Uncomment the following lines if additional password validation is needed
    // .min(8)
    // .max(32)
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .matches(/[0-9]/, 'Password must contain at least one number')
    // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
});

// For user email for forget password
export const userEmail: yup.Schema<UserEmailValues> = yup.object().shape({
    email: yup.string()
        .email('Invalid Email')
        .required('Email is required')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/, 'Please enter a valid email'),
});

// For password matching in forget password
export const passwordVerification: yup.Schema<PasswordVerificationValues> = yup.object().shape({
    password: yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .max(32, 'Password must be at most 32 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Password is required'),

    confirmPassword: yup.string().label('Confirm Password').required('Confirm Password is required').oneOf([yup.ref('password'), ''], 'Passwords do not match'),

});

// // For password reset from profile
export const changePasswordSch: yup.Schema<ChangePasswordValues, any, any, ""> = yup.object().shape({
    oldPassword: yup.string()
        .required('Old Password is required')
    // Uncomment the following lines if additional password validation is needed
    .min(8,'Old Password must be at least 8 characters')
    .max(32)
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .matches(/[0-9]/, 'Password must contain at least one number')
    ,
    newPassword: yup.string()
        .required('New Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(32, 'Password must be at most 32 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .matches(/[0-9]/, 'Password must contain at least one number'),
        
    confirmPassword: yup.string().label('Confirm Password').required('Confirm Password is required').oneOf([yup.ref('newPassword'), ''], 'Passwords do not match'),
});

export const createMail: yup.Schema<createMailValues> = yup.object().shape({
    emails: yup.array()
    .of(
        yup.string().required('Each email is required')
    )
    .required('Emails cannot be left empty')
    .min(1, 'There must be at least one email')
    ,
    subject: yup.string()
        .required('Subject cannot be left empty')
        .min(3, 'Subject must be at least 3 characters long')
        .max(1000, 'Subject must be between 3 to 1000 characters'),
    message: yup.string()
        .required('Message cannot be left empty')
        .min(3, 'Message must be at least 3 characters long')
        .max(100000, 'Message must be between 3 to 100000 characters'),
});

export const mailModalValues: yup.Schema<MailModalValues> = yup.object().shape({
    subject: yup.string()
        .required('Subject is required')
        .min(3, 'Subject must be at least 3 characters long')
        .max(1000, 'Subject must be at most 1000 characters long'),
    message: yup.string()
        .required('Message is required')
        .min(3, 'Message must be at least 3 characters long')
        .max(100000, 'Message must be at most 100000 characters long'),
});

export const createAdminModalValues: yup.Schema<CreateAdminValues> = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long')
        .max(1000, 'Name must be at most 1000 characters long'),
    email: yup.string()
        .required('Email is required')
        .email('Invalid Email')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/, 'Please enter a valid email'),      
    password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be at most 32 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

export const editAdminModalValues: yup.Schema<EditAdminValues> = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long')
        .max(1000, 'Name must be at most 1000 characters long'),
    email: yup.string()
        .email('Invalid Email')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/, 'Please enter a valid email'),
});




// export const changePasswordSchema = yup.object().shape({
//   oldPassword: yup.string()
//     .required('Old Password is required')
//     .min(8, 'Password must be at least 8 characters long')
//     .max(32, 'Password must be at most 32 characters long')
//     .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//     .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
//     .matches(/[0-9]/, 'Password must contain at least one number'),
  
//   newPassword: yup.string()
//     .required('New Password is required')
//     .min(8, 'Password must be at least 8 characters long')
//     .max(32, 'Password must be at most 32 characters long')
//     .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
//     .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
//     .matches(/[0-9]/, 'Password must contain at least one number'),
  
//   confirmPassword: yup.string()
//     .required('Confirm Password is required')
//     .oneOf([yup.ref('newPassword'), ''], 'Passwords do not match')
// });



export const voteValues: yup.Schema<voteValues> = yup.object().shape({
    address: yup.string()
        .required('Address is required')
        .min(10, 'Address must be at least 10 characters long')
        .max(100, 'Address must be at most 100 characters long'),
});

export const hoursValues: yup.Schema<hoursValues> = yup.object().shape({
    hours: yup.string()
        .required('Hours is required')
        .min(1, 'Hours must be at least 1 characters long')
        .max(3, 'Hours must be at most 3 characters long'),
});

// cnic: string;
//     phone: string;
//     registeredDistrict: string;
//     party: string;
//     bio: string;

export const candidateFormValues: yup.Schema<candidateFormValues> = yup.object().shape({
    cnic: yup.string()
        .required('CNIC is required')
        .min(16, 'CNIC must be at least 16 characters long')
        .max(16, 'CNIC must be at most 16 characters long'),
    phone: yup.string()
        .required('Phone is required')
        .min(11, 'Phone must be at least 11 characters long')
        .max(11, 'Phone must be at most 11 characters long'),
    registeredDistrict: yup.string()
        .required('Registered District is required')
        .min(1, 'Hours must be at least 1 characters long')
        .max(100, 'Hours must be at most 100 characters long'),
    party: yup.string()
        .required('Party is required')
        .min(1, 'Party must be at least 1 characters long')
        .max(100, 'Party must be at most 100 characters long'),
    bio: yup.string()
        .required('Bio is required')
        .min(1, 'Hours must be at least 1 characters long')
        .max(100, 'Hours must be at most 100 characters long'),
});

export const voterFormValues: yup.Schema<voterFormValues> = yup.object().shape({
    cnic: yup.string()
        .required('CNIC is required')
        .min(16, 'CNIC must be at least 16 characters long')
        .max(16, 'CNIC must be at most 16 characters long'),
    phone: yup.string()
        .required('Phone is required')
        .min(11, 'Phone must be at least 11 characters long')
        .max(11, 'Phone must be at most 11 characters long'),
    registeredDistrict: yup.string()
        .required('Registered District is required')
        .min(1, 'Hours must be at least 1 characters long')
        .max(100, 'Hours must be at most 100 characters long'),
});