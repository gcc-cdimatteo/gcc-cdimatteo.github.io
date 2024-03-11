import PageContainer from '../ui/page-container';
import { Typography } from 'antd';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: 16 }}>
      <p>Contenido para Material Adicional</p>
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Material Adicional' content={p_content}></PageContainer>
  );
};