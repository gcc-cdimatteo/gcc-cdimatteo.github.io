import { Box, Typography } from '@mui/material';
import { merriweather } from './fonts';
import Title from 'antd/es/typography/Title';

export default function SubjectName() {
  return (
    <Title level={2} style={{ fontSize: '1.5rem', marginLeft: '0px', color: '#FFFFFF' }}>
      Introducción al Desarrollo de Software - Lanzillotta
    </Title>
  );
}