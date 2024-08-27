import { Divider, Row } from 'antd';
import PageContainer from '../ui/page-container';
import CalendarRow from '../ui/calendario/calendar-row';
import CalendarRowHeader from '../ui/calendario/calendar-row-header';
import { getCalendarRowsDetails } from '../api/rows-detail';
import React from 'react';

export default async function Page() {

  const calendar = await getCalendarRowsDetails();

  const p_content = (
    <>
      <Row style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <CalendarRowHeader />

        <Divider style={{ borderWidth: 4, borderColor: '#306CBE' }} />

        {calendar?.map((row, index) => (
          <React.Fragment key={index}>
            <CalendarRow
              semana={row.semana}
              teorica_fecha={row.teorica_fecha}
              teorica_temas={row.teorica_temas?.split('\n')}
              practica_fecha={row.practica_fecha}
              practica_temas={row.practica_temas?.split('\n')} />

            <Divider style={{ borderWidth: 1, borderColor: '#607899' }} />
          </React.Fragment>
        ))}
      </Row>
    </>
  );

  return (
    <PageContainer breadcrumb='Calendario' content={p_content} />
  );
};