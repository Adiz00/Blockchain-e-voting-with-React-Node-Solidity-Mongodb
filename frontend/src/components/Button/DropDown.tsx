import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, MenuProps } from 'antd';
import React from 'react';

interface DropDownProps {
  items: MenuProps['items'];
  trigger: ('click' | 'hover' | 'contextMenu')[];
}

const DropDown: React.FC<DropDownProps> = ({ items, trigger }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={trigger}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Click me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropDown;
