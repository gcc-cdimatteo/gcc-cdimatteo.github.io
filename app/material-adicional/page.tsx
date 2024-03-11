import PageContainer from '../ui/page-container';
import { Typography } from 'antd';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      Contenido para Material Adicional
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Material Adicional' content={p_content}></PageContainer>
  );
};