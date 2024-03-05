'use client';

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Logo from './ui/logo';
import SchoolIcon from '@mui/icons-material/School';
import { AddToPhotosOutlined, AssignmentTurnedInOutlined, BookmarkBorderOutlined, CreateOutlined, EventOutlined, HistoryEduOutlined, HistoryEduRounded, HomeOutlined, HomeRounded, MenuBookOutlined, RoundedCorner, WatchLaterOutlined } from '@mui/icons-material';
import { merriweather } from './ui/fonts';
import { Button } from '@mui/material';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Inicio', '1', <HomeRounded />),
  getItem('Analítico', '2', <AssignmentTurnedInOutlined />),
  getItem('Cursada', '3', <WatchLaterOutlined />),
  getItem('Calendario', '4', <EventOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  getItem('Bibliografía', '9', <BookmarkBorderOutlined />),
  getItem('Material Adicional', '10', <AddToPhotosOutlined />),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body className={merriweather.className} style={{ marginLeft: '0px', marginTop: '0px' }}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" style={{ textAlign: 'center', marginTop: '12px', marginBottom: '12px' }} >
              <SchoolIcon htmlColor='#75B7E6' fontSize='large'></SchoolIcon>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
              <Logo />
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html >
  );
}
