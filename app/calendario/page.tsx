'use client';

import { Divider, Row, Typography } from 'antd';
import PageContainer from '../ui/page-container';
import CalendarRow from '../ui/calendario/calendar-row';
import CalendarRowHeader from '../ui/calendario/calendar-row-header';
import { calendar_rows_details } from '../ui/calendario/rows-details';


export default function Page() {

  const p_content = <>
    <Row style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <CalendarRowHeader />

      <Divider style={{ borderWidth: 4, borderColor: '#306CBE' }} />

      {calendar_rows_details.map((row: any) => {
        return (
          <>
            <CalendarRow
              semana={row.semana}
              teorica_fecha={row.teorica_fecha}
              teorica_temas={row.teorica_temas}
              teorica_diapositiva={row.teorica_diapositiva}
              teorica_modalidad={row.teorica_modalidad}
              teorica_grabacion={row.teorica_grabacion}
              practica_fecha={row.practica_fecha}
              practica_temas={row.practica_temas}
              practica_diapositiva={row.practica_diapositiva}
              practica_modalidad={row.practica_modalidad}
              practica_grabacion={row.practica_grabacion} />

            <Divider style={{ borderWidth: 1, borderColor: '#607899' }} />
          </>
        );
      })}
    </Row>

    <p>actualizado al 17/04/2024</p>
  </>;

  return (
    <PageContainer breadcrumb='Calendario' content={p_content}></PageContainer>
  );
};