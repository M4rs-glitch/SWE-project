import { Layout, Menu, Row } from 'antd';
import { IconContext } from 'react-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { SIDEBAR_WIDTH } from './../../shared/config/theme/themeConfig/themeConfig';
import { collapsedSidebarItems, sidebarItems } from './routes';
import { useState } from 'react';
import React from 'react';
import './Sidebar.css';
export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Layout.Sider
      width={SIDEBAR_WIDTH}
      collapsed={collapsed}
      onCollapse={(collapsed) => setCollapsed(collapsed)}
    >
      <Row className="brand">Brand</Row>
      <IconContext.Provider value={{ size: '16' }}>
        <Menu
          mode="inline"
          // Replace styles.menu with a regular class name, or use inline styles if necessary
          className="menu"
          items={collapsed ? collapsedSidebarItems : sidebarItems}
          onClick={({ key }) => {
            navigate(key);
          }}
          selectedKeys={[pathname]}
          defaultOpenKeys={[pathname]}
        />
      </IconContext.Provider>
    </Layout.Sider>
  );
};
