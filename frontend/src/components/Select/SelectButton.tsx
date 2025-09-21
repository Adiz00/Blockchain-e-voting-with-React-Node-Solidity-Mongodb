// import React from 'react'
// import { Select,ConfigProvider } from 'antd';
// import { Colors } from '../../config';



// const SelectButton = ({ values, handleChange, defaultValue, style, className,value }) => {
//     return (

//         <ConfigProvider
//             theme={{
//                 components: {
//                     Select: {
//                         optionSelectedBg:Colors.Green,
//                         optionSelectedColor:'#ffff',
//                         optionSelectedFontWeight:500,
//                         selectorBg:Colors.LightWhite
//                     },
//                 },
//             }}
//         >
//             <Select
//                 className={className}
//                 defaultValue={defaultValue}
//                 style={style}
//                 value={value}
//                 onChange={handleChange}
//                 options={values}
                
//             />
//         </ConfigProvider>

//     )
// }

// export default SelectButton


import React from 'react';
import { Select, ConfigProvider } from 'antd';
// import { Colors } from '../../config';
import arrowDrop from '../../assets/images/arrowDropdown.svg';


interface SelectButtonProps {
  values?: { label: string; value: string | number }[];
  handleChange?: (value: any) => void;
  defaultValue?: string | number;
  style?: React.CSSProperties;
  className?: string;
  value?: string | number;
  popupClassName?: string;
  props?: any;
}

const SelectButton: React.FC<SelectButtonProps> = ({ values, handleChange, defaultValue, style, className, value, popupClassName, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionSelectedBg: 'transparent',
            optionSelectedColor: Colors.Blue,
            optionSelectedFontWeight: 500,
            selectorBg: Colors.LightWhite,
          },
        },
      }}
    >
      <Select
        className={className}
        defaultValue={defaultValue}
        style={style}
        value={value}
        onChange={handleChange}
        options={values}
        popupClassName={popupClassName}
        suffixIcon={ <img style={{width: '.7rem', height: '.7rem'}} src={arrowDrop} alt=""/>}
        {...props}
        
      />
    </ConfigProvider>
  );
}

export default SelectButton;
