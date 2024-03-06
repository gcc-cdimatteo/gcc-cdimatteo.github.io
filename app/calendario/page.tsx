'use client';

import { Checkbox, Col, Divider, Row, Tag } from 'antd';
import PageContainer from '../ui/page-container';
import ListItem from '../ui/list-item';
import { FiberManualRecordTwoTone, FilePresentOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ColSemana from '../ui/calendario/col-semana';
import { diapositiva_col, fecha_col, modalidad_col, semana_col, teorica_practica_col, white_col } from '../ui/calendario/col-lengths';

export default function Page() {

  const p_content = <>

    <Row style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <ColSemana content={<>Semana</>} />

      <Col span={white_col}></Col>
      <Col span={fecha_col}>Fecha</Col>
      <Col span={teorica_practica_col}>Teórica</Col>
      <Col span={diapositiva_col}>Clase</Col>
      <Col span={modalidad_col}>Modalidad</Col>
      <Col span={white_col}></Col>
      <Col span={white_col}></Col>
      <Col span={fecha_col}>Fecha</Col>
      <Col span={teorica_practica_col}>Práctica</Col>
      <Col span={diapositiva_col}>Clase</Col>
      <Col span={modalidad_col}>Modalidad</Col>

      <Divider style={{ borderWidth: 4, borderColor: '#306CBE' }} />

      <Col span={semana_col}>1</Col>
      <Col span={white_col}></Col>
      <Col span={fecha_col}>12/03/2024</Col>
      <Col span={teorica_practica_col}>
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>Presentación de la Materia</p>} />
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>Introducción a Linux</p>} />
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>Terminal</p>} />
      </Col>
      <Col span={diapositiva_col}>
        <Link
          href="https://docs.google.com/presentation/d/1zrOqeeOyucCVuej2t1nmGFft-xQNBhLMuiJnTSVQnwQ/edit?usp=sharing"
          target='_blank'>
          <FilePresentOutlined />
        </Link>
      </Col>
      <Col span={modalidad_col}><Tag color="magenta">Presencial</Tag></Col>
      <Col span={white_col}></Col>
      <Col span={white_col}></Col>
      <Col id='dateLabel' span={fecha_col}>06/03/2024</Col>
      <Col span={teorica_practica_col}>
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>Opciones de Instalación de Linux</p>} />
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>WSL, VM, Dual Boot</p>} />
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>Bash</p>} />
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>Editores de Terminal</p>} />
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>Variables de Entorno</p>} />
        <ListItem icon={<FiberManualRecordTwoTone style={{ color: '#005AB6', fontSize: 12 }} />} text={<p style={{ textAlign: 'left' }}>Estructuras Condicionales e Iterativas</p>} />
      </Col>
      <Col span={diapositiva_col}>
        <Link
          href="https://docs.google.com/presentation/d/1Svufb4eW9yXK3wyeklDMO6ddB6vzU_uhGUsZMMkJlKQ/edit?usp=drive_link"
          target='_blank'>
          <FilePresentOutlined />
        </Link>
      </Col>
      <Col span={modalidad_col}><Tag color="green">Virtual</Tag></Col>

      <Divider style={{ borderWidth: 1, borderColor: '#607899' }} />

    </Row>
  </>;

  return (
    <PageContainer breadcrumb='Calendario' content={p_content}></PageContainer>
  );
};