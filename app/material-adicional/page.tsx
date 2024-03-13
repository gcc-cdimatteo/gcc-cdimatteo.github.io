import { ChevronRightOutlined } from '@mui/icons-material';
import ListLinkItem from '../ui/list-link-item';
import PageContainer from '../ui/page-container';
import { Typography } from 'antd';

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      <ListLinkItem
        icon={<ChevronRightOutlined htmlColor="#006EAF" />}
        link={'https://drive.google.com/file/d/1H0COwPY28acPIhz8fGGMpN467ZGMS4hg/view?usp=share_link'}
        title={"Códigos EMMET"}
      />
      <ListLinkItem
        icon={<ChevronRightOutlined htmlColor="#006EAF" />}
        link={'https://drive.google.com/file/d/1H0COwPY28acPIhz8fGGMpN467ZGMS4hg/view?usp=share_link'}
        title={"Comandos UNIX"}
      />

    </Typography>
  </>;

  return (
    <PageContainer breadcrumb='Material Adicional' content={p_content}></PageContainer>
  );
};