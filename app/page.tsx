import { ReactElement } from 'react';
import PageContainer from './ui/page-container';
import { Typography } from 'antd';
import { AssignmentTurnedInOutlined, EventOutlined, Face, Face2, Face5, Face6, Person, Report, School, SentimentVerySatisfiedOutlined, WatchLaterOutlined } from '@mui/icons-material';
import { Box, Icon } from '@mui/material';
import Tab from './ui/tab';
import Teacher from './ui/teacher';
import Link from 'next/link';
import Space from './ui/space';
import ListItem from './ui/list-item';

export default function Page() {
  const p_content: ReactElement = (
    <>
      <Typography style={{ fontSize: 16 }}>
        Bienvenido al Sitio Oficial de la Materia Introducción al Desarrollo de Software de la Facultad de Ingenieria de la Universidad de Buenos Aires, curso Lanzillotta.

        <h4>Información General</h4>
        <p>Las clases se desarrollan los días martes y jueves de 18 a 21 hs.</p>
        <p>La modalidad será de tipo <b>híbrida</b>: <u>las clases se dictarán presencialmente con la posibilidad de asistir a ellas de forma virtual por streaming</u>.</p>
        <p>Aquellos que quieran asistir a las clases de forma presencial, los esperamos en el aula [A DETERMINAR].</p>
        <p>Quienes asistan de forma virtual, los esperamos
          <Link
            target="_blank"
            href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDM4MGJhNjgtYTVmYS00N2M0LWE0MTktYjUxNjlmMWEwNjcy%40thread.v2/0?context=%7b%22Tid%22%3a%22e13f1e52-6e32-4972-82ca-697420ee3c98%22%2c%22Oid%22%3a%226746d176-ad45-418c-9ecd-30c9893941f8%22%7d"
          > en este link</Link>.</p>

        <h4>Importante</h4>
        <ListItem icon={<Report style={{ color: '#D00026' }} />} text={<p>Si <u>estás inscripto en la materia</u>, por favor, llena <Link href="https://forms.gle/ohzXL2d66PMwDjVy6" target="_blank"> este formulario</Link>.</p>} />
        <ListItem icon={<Report style={{ color: '#D00026' }} />} text={<p>Si <u>ya llenaste el formulario anterior</u> y <u>marcaste la opción <i>"voy a cursar en esta cátedra"</i></u>, por favor, llena <Link href="https://forms.gle/H6YoEEiaP32zrRfR7" target="_blank"> este otro formulario</Link>.</p>} />

        <h4>Novedades y Contacto</h4>
        <p>Cualquier novedad en lo que respecte a la cursada, trámites administrativos y consultas las estaremos publicando tanto en esta página web como nuestro <Link href="https://join.slack.com/t/introduccinal/shared_invite/zt-2d59bckpc-gqoV7VvSIqulLUeImEoYOw" target="_blank">canal de Slack</Link>.</p>

      </Typography>
    </>
  );

  return (
    <PageContainer breadcrumb='Inicio' content={p_content}></PageContainer>
  );
};