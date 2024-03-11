import PageContainer from '../ui/page-container';
import Book from '../ui/bibliografia/book';
import { Typography } from 'antd';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      Bibliografía utilizada:
      <Book
        link="https://drive.google.com/file/d/16T8ipooOMVdwPBaoinm3CNc5Mlt0TACP/view?usp=drive_link"
        title="Bash Beginners Guide - Machtelt Garrels"
      />
      <Book
        link="https://drive.google.com/file/d/1PAf2ak5pzgX0G6iPQXclujyBLv9Z7b6J/view?usp=drive_link"
        title="Communicating the User Experience - Richard Caddick, Steve Cable"
      />
      <Book
        link="https://drive.google.com/file/d/167ioAVI9WmigSlLTm7OziQF90zGpny7f/view?usp=drive_link"
        title="Introduction to Linux - Machtelt Garrels"
      />
      <Book
        link="https://drive.google.com/file/d/1nMcd_X_rMIfDnywXcGQgTtBj6Cd_iRac/view?usp=drive_link"
        title="Test Driven Development By Example - Kent Beck"
      />
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Bibliografía' content={p_content}></PageContainer>
  );
};