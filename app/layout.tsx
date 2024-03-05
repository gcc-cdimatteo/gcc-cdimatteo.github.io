'use client';

import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Logo from './ui/logo';
import SchoolIcon from '@mui/icons-material/School';
import { merriweather } from './ui/fonts';
import Link from 'next/link';
import { Button } from '@mui/material';
import NavLinks from './ui/nav-links';

const { Header, Footer, Sider } = Layout;

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
              <Link href="/">
                <Button>
                  <SchoolIcon htmlColor='#75B7E6' fontSize='large'></SchoolIcon>
                </Button>
              </Link>
            </div>
            <NavLinks></NavLinks>
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
              <Logo />
            </Header>
            {children}
            <Footer style={{ textAlign: 'center' }}>
              Introducción al Desarrollo de Software © {new Date().getFullYear()} Created by Carolina Di Matteo
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html >
  );
}
