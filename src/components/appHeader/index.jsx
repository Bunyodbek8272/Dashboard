import { Badge, Drawer, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import { getComments, getOrders } from "../../data/api";

const AppHeader = () => {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setcommentsOpen] = useState(false);
  const [notificationOpen, setnotificationOpen] = useState(false);

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });

    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className="AppHeader">
      <h3>Logo</h3>
      <Typography>
        <h3>Bunyodbek's Dashbord </h3>
      </Typography>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => {
              setcommentsOpen(true);
            }}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => {
              setnotificationOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => {
          setcommentsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationOpen}
        onClose={() => {
          setnotificationOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong> {item.title} </Typography.Text>has been
                ordered
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
};

export default AppHeader;
