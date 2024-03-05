import { Typography } from '@mui/material';
import { merriweather } from './fonts';

export default function Logo() {
  return (
    <div>
      <Typography style={{ marginLeft: '32px' }} color='#0282DE' fontFamily={merriweather.className} fontSize={'32px'}>
        Introducción al Desarrollo de Software
      </Typography>
    </div>
  );
}