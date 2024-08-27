import { Typography } from 'antd';
import PageContainer from '../ui/page-container';
import ListItem from '../ui/list-item';
import { CheckBox, Info, Report } from '@mui/icons-material';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      Para regularizar la materia es <b>obligatorio</b>:
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Parcialito</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Parcial Integral</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Trabajo Práctico Grupal</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar la Defensa Oral del Trabajo Práctico Grupal</p>} />

      <h4>Aclaraciones</h4>
      <ListItem icon={<Report sx={{ fontSize: 16, color: '#C41E3A' }} />} text={<p>El Parcialito es presencial, tiene una instancia de recuperación (1 recuperatorio)</p>} />
      <ListItem icon={<Report sx={{ fontSize: 16, color: '#C41E3A' }} />} text={<p>El Parcial Integral es presencial, tiene dos instancias de recuperación (2 recuperatorios)</p>} />

      {/* <h4>Promoción</h4>
      <p>La materia se <u>promociona</u> sí y sólo sí: <b>[(Parcial Integral ó Primer Recuperatorio) &gt;= 7] && [TP Grupal &gt;= 7]</b></p> */}
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Cursada' content={p_content}></PageContainer>
  );
};