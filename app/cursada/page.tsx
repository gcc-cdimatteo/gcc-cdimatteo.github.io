import { Typography } from 'antd';
import PageContainer from '../ui/page-container';
import ListItem from '../ui/list-item';
import { DoneOutline } from '@mui/icons-material';
import Tab from '../ui/tab';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: 16 }}>
      Los requerimientos para <b>regularizar</b> la materia son:
      <ListItem icon={<DoneOutline sx={{ fontSize: 16, color: '#D40079' }} />} text={<p>Aprobar el Primer Parcialito (TEMA)</p>} />
      <ListItem icon={<DoneOutline sx={{ fontSize: 16, color: '#D40079' }} />} text={<p>Aprobar el Segundo Parcialito (TEMA)</p>} />
      <ListItem icon={<DoneOutline sx={{ fontSize: 16, color: '#D40079' }} />} text={<p>Aprobar el Parcial Integral</p>} />
      <ListItem icon={<DoneOutline sx={{ fontSize: 16, color: '#D40079' }} />} text={<p>Aprobar el Trabajo Práctico Grupal</p>} />
      <ListItem icon={<DoneOutline sx={{ fontSize: 16, color: '#D40079' }} />} text={<p>Tener más del 75% de la asistencia</p>} />
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Cursada' content={p_content}></PageContainer>
  );
};