import { ReactElement } from 'react';
import PageContainer from '../ui/page-container';
import { Typography } from 'antd';
import { Face, Face2, Face5, Face6, Person, School } from '@mui/icons-material';
import { Box, Icon } from '@mui/material';
import Tab from '../ui/tab';
import Teacher from '../ui/teacher';

export default function Page() {
  const p_content: ReactElement = (
    <>
      <Typography style={{ fontSize: 16 }}>
        <div>
          Los docentes de la cátedra somos:
          <br />
          <br />
          <Teacher icon={<School style={{ color: '#884DEB' }} />} name={<> Lic. Bruno Lanzillotta </>} />
          <br />
          <Teacher icon={<Face style={{ color: '#884DEB' }} />} name={<> Martín Sosa </>} />
          <br />
          <Teacher icon={<Face style={{ color: '#884DEB' }} />} name={<> Franco Capra </>} />
          <br />
          <Teacher icon={<Face2 style={{ color: '#884DEB' }} />} name={<> Carolina Di Matteo </>} />
          <br />
          <Teacher icon={<Face6 style={{ color: '#884DEB' }} />} name={<> Leonel Chaves </>} />
          <br />
          <Teacher icon={<Face6 style={{ color: '#884DEB' }} />} name={<> Tomás Villegas </>} />
          <br />
          <Teacher icon={<Person style={{ color: '#884DEB' }} />} name={<> Nestor Palavecino </>} />
          <br />
          <Teacher icon={<Person style={{ color: '#884DEB' }} />} name={<> Marina Petean </>} />
          <br />
          <Teacher icon={<Person style={{ color: '#884DEB' }} />} name={<> Nicolás Romano </>} />
          <br />
          <Teacher icon={<Person style={{ color: '#884DEB' }} />} name={<> Santiago Novaro </>} />
          <br />
          <Teacher icon={<Person style={{ color: '#884DEB' }} />} name={<> Francisco Lorda </>} />
        </div>
      </Typography>
    </>
  );

  return (
    <PageContainer breadcrumb='Docentes' content={p_content}></PageContainer>
  );
};