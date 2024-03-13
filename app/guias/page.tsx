import { BorderColorRounded } from '@mui/icons-material';
import ListLinkItem from '../ui/list-link-item';
import PageContainer from '../ui/page-container';
import { Typography } from 'antd';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      Guías de Ejercicios:
      <ListLinkItem icon={<BorderColorRounded htmlColor="#006EAF" />} link={'https://drive.google.com/file/d/1FzgN-vZGjmhXQrDka1eCKYBaAXU5U2Y-/view?usp=share_link'} title={"Guía 1 - LINUX"} />
    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Guías' content={p_content}></PageContainer>
  );
};