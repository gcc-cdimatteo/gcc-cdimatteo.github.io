import { Typography } from 'antd';
import PageContainer from '../ui/page-container';
import ListItem from '../ui/list-item';
import { CheckBox, Info } from '@mui/icons-material';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      Los requerimientos para <b>regularizar</b> la materia son:
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Primer Parcialito</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Segundo Parcialito</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Parcial Integral</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Trabajo Práctico Grupal</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Tener más del 75% de la asistencia</p>} />
      <p>La materia se <b>promociona</b> con <u>más de 7 (siete) puntos de promedio</u>. Es decir:</p>
      <ListItem icon={<Info sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>([Primer Parcialito]+[Segundo Parcialito]+[Parcial]+[TP Grupal]) / 4 &gt; 7 → <b>PROMOCIONA</b> (NO RINDE FINAL)</p>} />
      <ListItem icon={<Info sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>([Primer Parcialito] + [Segundo Parcialito] + [Parcial] + [TP Grupal]) / 4 ≤ 7 → <b>RINDE FINAL</b></p>} />
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Cursada' content={p_content}></PageContainer>
  );
};