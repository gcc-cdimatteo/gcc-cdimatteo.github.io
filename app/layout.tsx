'use client';

import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import SubjectName from './ui/subject-name';
import SchoolIcon from '@mui/icons-material/School';
import { merriweather } from './ui/fonts';
import NavLinks from './ui/nav-links';
import Image from 'next/image'

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
      <body className={merriweather.className} style={{ marginLeft: '0px', marginRight: '0px', marginTop: '0px' }}>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" style={{ maxHeight: 100, textAlign: 'center', marginTop: '12px', marginBottom: '12px' }} >
              {/* <SchoolIcon htmlColor='#75B7E6' fontSize='large'></SchoolIcon> */}
              <Image
                src={'/fiuba.png'}
                width={50}
                height={50}
                alt={''}
              ></Image>
            </div>
            <NavLinks></NavLinks>
          </Sider>
          <Layout>
            <Header style={{ paddingLeft: 24, marginTop: 12, marginRight: 12, marginLeft: 16, background: '#0079D4', borderRadius: borderRadiusLG, display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
              <SubjectName />
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
