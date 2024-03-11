import { Box, Typography } from '@mui/material';
import { lusitana, merriweather } from './fonts';
import Title from 'antd/es/typography/Title';

export default function SubjectName() {
  return (
    <Title level={2} style={{ fontSize: '1.5rem', color: '#FFFFFF', marginRight: '0rem' }}>
      Introducción al Desarrollo de Software - Lanzillotta
    </Title>
  );
}