import React from "react";
import ReactSwitch from 'react-switch';
const Toggle = ({ checked, onChange, ...props }) => {
    return (
        <>
            <ReactSwitch
                checked={checked}
                onChange={onChange}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor='#3498db'
                offColor='#d8d8d8'
                onHandleColor='#ecf0f1'
                offHandleColor='#909090'
                {...props}
            />
        </>
    );
};
export default Toggle;