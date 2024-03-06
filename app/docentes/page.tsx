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
          <p>Los docentes de la cátedra somos:</p>
          <Teacher icon={<School />} name={<> Lic. Bruno Lanzillotta </>} />
          <br />
          <Teacher icon={<Face />} name={<> Martín Sosa </>} />
          <br />
          <Teacher icon={<Face />} name={<> Franco Capra </>} />
          <br />
          <Teacher icon={<Face2 />} name={<> Carolina Di Matteo </>} />
          <br />
          <Teacher icon={<Face6 />} name={<> Leonel Chaves </>} />
          <br />
          <Teacher icon={<Face6 />} name={<> Tomás Villegas </>} />
          <br />
          <Teacher icon={<Person />} name={<> Nestor Palavecino </>} />
          <br />
          <Teacher icon={<Person />} name={<> Marina Petean </>} />
          <br />
          <Teacher icon={<Person />} name={<> Nicolás Romano </>} />
          <br />
          <Teacher icon={<Person />} name={<> Santiago Novaro </>} />
          <br />
          <Teacher icon={<Person />} name={<> Francisco Lorda </>} />
        </div>
      </Typography>
    </>
  );

  return (
    <PageContainer breadcrumb='Docentes' content={p_content}></PageContainer>
  );
};