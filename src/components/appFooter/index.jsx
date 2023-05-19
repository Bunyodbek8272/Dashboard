import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+998916918272">+998916918272</Typography.Link>
      <Typography.Link href="https://www.instagram.com/" target="_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.facebook.com/" target="_blank">
        Term of Use
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
