import React from "react";
import { Row, Col, Tabs } from "antd";
// import "./style.css";

export default function Tab(props) {
    const { TabPane } = Tabs;

    return (
        <Tabs
            size="large"
            defaultActiveKey={'1'}
            onChange={props.onChangeTab}
            {...props}
        >
            {(props.data || []).map((item, i) => {
                return (
                    <TabPane tab={item.key} key={i + 1} >
                        {item?.component()}
                    </TabPane>
                );
            })}
        </Tabs>
    );
}
