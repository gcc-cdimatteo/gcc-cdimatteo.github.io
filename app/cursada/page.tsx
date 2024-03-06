import { Typography } from 'antd';
import PageContainer from '../ui/page-container';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: 16 }}>
      La modalidad de la cursada será...
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Cursada' content={p_content}></PageContainer>
  );
};