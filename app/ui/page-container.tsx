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
        <Content style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            <Breadcrumb style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <Breadcrumb.Item>
                    <SchoolIcon></SchoolIcon>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
                style={{
                    padding: '2rem',
                    marginTop: '1rem',
                    // margin: 0,
                    background: '#BFDDF4',
                    borderRadius: borderRadiusLG,
                    color: '#000000',
                    // display: 'flex',
                }}
            >
                {content}
            </Content>
        </Content>
    );
}