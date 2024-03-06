'use client';

import { Breadcrumb, Layout, theme } from 'antd';
import SchoolIcon from '@mui/icons-material/School';
import { ReactElement, ReactHTML } from 'react';

const { Content } = Layout;

export default function PageContainer({ breadcrumb, content }: { breadcrumb: string, content: ReactElement }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <SchoolIcon></SchoolIcon>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    background: '#BFDDF4',
                    borderRadius: borderRadiusLG,
                    color: '#000000',
                    display: 'grid',
                }}
            >
                {content}
            </Content>
        </Content>
    );
}