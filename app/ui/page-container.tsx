'use client';

import { Breadcrumb, Layout, theme } from 'antd';
import SchoolIcon from '@mui/icons-material/School';
import { ReactElement } from 'react';

const { Content } = Layout;

export default function PageContainer({ breadcrumb, content }: { breadcrumb: string, content: ReactElement }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content style={{ marginLeft: '1rem', marginRight: '1rem' }}>
            <Breadcrumb style={{ marginTop: '1rem', marginBottom: '1rem' }}
                items={[
                    { title: <SchoolIcon /> },
                    { title: breadcrumb }
                ]}
            />
            <Content
                style={{
                    padding: '2rem',
                    marginTop: '1rem',
                    background: '#BFDDF4',
                    borderRadius: borderRadiusLG,
                    color: '#000000',
                }}
            >
                {content}
            </Content>
        </Content>
    );
}
