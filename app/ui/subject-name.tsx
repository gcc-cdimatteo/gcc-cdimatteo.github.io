import { Typography } from '@mui/material';
import { merriweather } from './fonts';

export default function SubjectName() {
  return (
    <div>
      <Typography style={{ marginLeft: '0px' }} color='#FFFFFF' fontFamily={merriweather.className} fontSize={'32px'}>
        Introducción al Desarrollo de Software - Lanzillotta - 2024C1
      </Typography>
    </div>
  );
}