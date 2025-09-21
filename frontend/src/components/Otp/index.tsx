// import OtpInput from 'react-otp-input';

// const InputOtp = ({ value, onChange, inputStyle, containerStyle, numInputs, inputType, skipDefaultStyles }) => {

//     return (
//         <OtpInput
//             value={value}
//             onChange={onChange}
//             inputStyle={inputStyle}
//             containerStyle={containerStyle}
//             numInputs={numInputs}
//             renderSeparator={<span>  </span>}
//             inputType={inputType}
//             renderInput={(props) => <input {...props} />}
//             skipDefaultStyles={skipDefaultStyles}
//         />

//     )
// }

// export default InputOtp

import React from 'react';
import OtpInput, { AllowedInputTypes } from 'react-otp-input';

interface InputOtpProps {
  value: string;
  onChange: (otp: string) => void;
  inputStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  numInputs: number;
  inputType?: AllowedInputTypes;
  skipDefaultStyles?: boolean;
}

const InputOtp: React.FC<InputOtpProps> = ({
  value,
  onChange,
  inputStyle,
  containerStyle,
  numInputs,
  inputType,
  skipDefaultStyles
}) => {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      inputStyle={inputStyle}
      containerStyle={containerStyle}
      numInputs={numInputs}
      renderSeparator={<span> </span>}
      inputType={inputType}
      renderInput={(props) => <input {...props} />}
      skipDefaultStyles={skipDefaultStyles}
    />
  );
}

export default InputOtp;
