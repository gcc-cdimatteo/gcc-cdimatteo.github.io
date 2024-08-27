import { ReactElement } from 'react';
import PageContainer from './ui/page-container';
import { Typography } from 'antd';
import { AssignmentTurnedInOutlined, EventOutlined, Face, Face2, Face5, Face6, LinkOutlined, Person, Report, School, SentimentVerySatisfiedOutlined, WatchLaterOutlined } from '@mui/icons-material';
import { Box, Icon } from '@mui/material';
import Tab from './ui/tab';
import Teacher from './ui/teacher';
import Link from 'next/link';
import Space from './ui/space';
import ListItem from './ui/list-item';
import ListLinkItem from './ui/list-link-item';

export default function Page() {
  const p_content: ReactElement = (
    <>
      <Typography style={{ fontSize: 16 }}>
        Bienvenido al Sitio Oficial de la Materia Introducción al Desarrollo de Software de la Facultad de Ingenieria de la Universidad de Buenos Aires, curso <b>Lanzillotta</b>, segundo cuatrimestre 2024.

        <h4>Información General</h4>
        <p>Las clases se desarrollan los días martes y jueves de 18 a 21 hs.</p>
        <p>La modalidad será de tipo <b>híbrida</b>: <u>las clases se dictarán presencialmente con la posibilidad de asistir a ellas de forma virtual por streaming</u>.</p>
        <p>Aquellos que quieran asistir a las clases de forma presencial, los esperamos en el <u>aula 200 los días martes y jueves</u>.</p>

        <h4>Novedades y Contacto</h4>
        <p>Cualquier novedad en lo que respecte a la cursada, trámites administrativos y consultas las estaremos publicando tanto en esta página web como nuestro canal de Slack.</p>
        <p>Cualquier consulta, podés escrbir a nuestro correo: introfiuba@gmail.com</p>

        <h4>Links de Interés</h4>
        <ListLinkItem icon={<LinkOutlined htmlColor="#006EAF" />} link={"https://teams.microsoft.com/l/meetup-join/19:0NZNrUQO3GGN51dmSQ68i6jTVt2hmgua3lkeqbD_qKQ1@thread.tacv2/1724186913982?context=%7B%22Tid%22:%22b41ac89a-6984-4110-853b-f6f558dee7d4%22,%22Oid%22:%225bb"} title={"Clase Virtual en Teams"} />
        <ListLinkItem icon={<LinkOutlined htmlColor="#006EAF" />} link={"https://introduccinal.slack.com/join/shared_invite/zt-2oyza3902-Z0OB8B9toYkckl3O8ssKhA#/shared-invite/email"} title={"Canal de Slack"} />
        <ListLinkItem icon={<LinkOutlined htmlColor="#006EAF" />} link={"https://www.youtube.com/@Intro.Desa.Soft-Lanzillotta"} title={"Canal de YouTube"} />
        <ListLinkItem icon={<LinkOutlined htmlColor="#006EAF" />} link={"https://drive.google.com/drive/folders/11ZPL8mjL2F_Kr-mRltXGba62FovkkIwB"} title={"Guía de Ejercicios"} />
        <ListLinkItem icon={<LinkOutlined htmlColor="#006EAF" />} link={"https://drive.google.com/drive/folders/1EaowjueNp7y7_b0Qj_PyDmSJaaZOescM?usp=sharing"} title={"Drive para Alumnos"} />
        <ListLinkItem icon={<LinkOutlined htmlColor="#006EAF" />} link={"https://chat.whatsapp.com/LWHJN7BCCed0FbeIGOEUkp"} title={"WhatsApp para Alumnos"} />

      </Typography>
    </>
  );

  return (
    <PageContainer breadcrumb='Inicio' content={p_content}></PageContainer>
  );
};