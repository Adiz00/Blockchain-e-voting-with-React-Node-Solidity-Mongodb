// var baseUrl = "https://jsonplaceholder.typicode.com/";

// const configVariables = {
//     baseUrl
// }

// const constantVariables = {
//     TempUser: { name: "David Smith", email: "david@yopmail.com", pass: "asd123", userId: 12 }
// }

// export default {
//     ...configVariables,
//     ...constantVariables
// }


// Define the types for the configuration variables and constants

interface ConfigVariables {
    baseUrl: string;
  }
  
  interface TempUser {
    name: string;
    email: string;
    pass: string;
    userId: number;
  }
  
  interface ConstantVariables {
    TempUser: TempUser;
  }
  
  // Define the values for configVariables and constantVariables
  const baseUrl: string = "https://jsonplaceholder.typicode.com/";
  
  const configVariables: ConfigVariables = {
    baseUrl
  }
  
  const constantVariables: ConstantVariables = {
    TempUser: { name: "David Smith", email: "david@yopmail.com", pass: "asd123", userId: 12 }
  }
  
  // Export the merged configuration object
  const config = {
    ...configVariables,
    ...constantVariables
  };
  
  export default config;
  