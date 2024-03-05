'use client';

import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import SchoolIcon from '@mui/icons-material/School';

const { Content } = Layout;

export default function Page() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ margin: '0 16px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <SchoolIcon></SchoolIcon>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </Content>
    </Content>
  );
};