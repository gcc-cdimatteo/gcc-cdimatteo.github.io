import { Typography } from 'antd';
import PageContainer from '../ui/page-container';
import ListItem from '../ui/list-item';
import { CheckBox, Info, Report } from '@mui/icons-material';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      Para regularizar la materia es <b>obligatorio</b>:
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Primer Parcialito</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Segundo Parcialito</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Parcial Integral</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Aprobar el Trabajo Práctico Grupal</p>} />
      <ListItem icon={<CheckBox sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>Tener más del 75% de la asistencia</p>} />

      <h4>Aclaraciones</h4>
      <ListItem icon={<Report sx={{ fontSize: 16, color: '#C41E3A' }} />} text={<p>El Primer y Segundo Parcialito se aprueba con AL MENOS el 50% de las preguntas correctas</p>} />
      <ListItem icon={<Report sx={{ fontSize: 16, color: '#C41E3A' }} />} text={<p>El Primer y Segundo Parcialito NO TIENEN instancias de recuperación</p>} />
      <ListItem icon={<Report sx={{ fontSize: 16, color: '#C41E3A' }} />} text={<p>En caso de NO APROBAR EL PARCIAL en la primer instancia, hay 2 instancias más para recuperarlo (al menos debe aprobarse una de estas 3 instancias)</p>} />
      <ListItem icon={<Report sx={{ fontSize: 16, color: '#C41E3A' }} />} text={<p>La inscripción en el formulario de asistencia será válida dentro de los 15' de lanzado el mismo</p>} />

      <h4>Promoción</h4>
      <p>La materia se <b>promociona</b> con <u>más de 7 (siete) puntos de promedio</u>. Es decir:</p>
      <ListItem icon={<Info sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>([Primer Parcialito]+[Segundo Parcialito]+[Parcial]+[TP Grupal]) / 4 &gt; 7 → <b>PROMOCIONA</b> (NO RINDE FINAL)</p>} />
      <ListItem icon={<Info sx={{ fontSize: 16, color: '#006EAF' }} />} text={<p>([Primer Parcialito] + [Segundo Parcialito] + [Parcial] + [TP Grupal]) / 4 ≤ 7 → <b>RINDE FINAL</b></p>} />
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Cursada' content={p_content}></PageContainer>
  );
};