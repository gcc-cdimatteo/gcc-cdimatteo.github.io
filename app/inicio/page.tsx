import { ReactElement } from 'react';
import PageContainer from '../ui/page-container';
import { Typography } from 'antd';
import { AssignmentTurnedInOutlined, EventOutlined, Face, Face2, Face5, Face6, Person, School, SentimentVerySatisfiedOutlined, WatchLaterOutlined } from '@mui/icons-material';
import { Box, Icon } from '@mui/material';
import Tab from '../ui/tab';
import Teacher from '../ui/teacher';
import Link from 'next/link';
import Space from '../ui/space';

export default function Page() {
  const p_content: ReactElement = (
    <>
      <Typography style={{ fontSize: 16 }}>
        <p>Bienvenido al Sitio Oficial de la Materia Introducción al Desarrollo de Software de la Facultad de Ingenieria de la Universidad de Buenos Aires, curso: Lanzillotta.</p>

        <p>Las clases se desarrollan los días martes y miércoles de 18 a 21 hs.</p>

        <p>
          Para saber más...
        </p>

        <Box display={'flex'} alignItems={'center'} alignContent={'center'} gridRow={1} >
          <Tab />
          <WatchLaterOutlined />
          <Space />
          <Link href="/cursada">de la cursada, toca acá.</Link>
        </Box>

        <br />

        <Box display={'flex'} alignItems={'center'} alignContent={'center'} gridRow={1} >
          <Tab />
          <AssignmentTurnedInOutlined />
          <Space />
          <Link href="/cursada">del programa de la materia, toca acá.</Link>
        </Box>

        <br />

        <Box display={'flex'} alignItems={'center'} alignContent={'center'} gridRow={1} >
          <Tab />
          <EventOutlined />
          <Space />
          <Link href="/cursada">del calendario, toca acá.</Link>
        </Box>

        <br />

        o podés seguir navegando por la web, utilizando el menú desplegable de la izquierda todo el tiempo que necesites!
      </Typography>
    </>
  );

  return (
    <PageContainer breadcrumb='Inicio' content={p_content}></PageContainer>
  );
};