import { FiberManualRecord, Star, Stars } from '@mui/icons-material';
import ListItem from '../ui/list-item';
import PageContainer from '../ui/page-container';

import { Typography } from 'antd';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: 16 }}>
      Durante la materia, desarrollaremos los siguientes contenidos:
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Nociones Básicas de Sistemas Operativos Linux</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Nociones básicas de Entorno de Programación</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Depuración (debugging)</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Manejo de la Terminal y comandos básicos</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Control de Versiones.</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Manejo básico de shell-scripting</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Desarrollo Orientado por Pruebas</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Nociones básicas de Ingeniería de Software</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Nociones Básicas de Desarrollo Web: Front-End, Back-End y Frameworks</p>} />
      <ListItem icon={<Star sx={{ fontSize: 16 }} />} text={<p>Introducción a Bases de Datos.</p>} />
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Programa' content={p_content}></PageContainer>
  );
};