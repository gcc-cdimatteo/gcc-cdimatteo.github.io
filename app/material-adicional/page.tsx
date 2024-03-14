import { ChevronRightOutlined } from '@mui/icons-material';
import ListLinkItem from '../ui/list-link-item';
import PageContainer from '../ui/page-container';
import { Typography } from 'antd';

const material = [
  {
    title: "Códigos EMMET",
    link: "https://drive.google.com/file/d/1H0COwPY28acPIhz8fGGMpN467ZGMS4hg/view?usp=share_link",
  },
  {
    title: "Comandos UNIX",
    link: "https://drive.google.com/file/d/1e8wOwxJp9gc7uQw8JKKa4MT-BCDTqJaC/view?usp=share_link",
  },
  {
    title: "MUO - How to Install Ubuntu on VMware Workstation",
    link: "https://www.makeuseof.com/install-ubuntu-on-vmware-workstation/",
  },
  {
    title: "Instalación de WSL",
    link: "https://learn.microsoft.com/es-es/windows/wsl/install",
  },
  {
    title: "WSL | Ubuntu",
    link: "https://ubuntu.com/desktop/wsl",
  },
  {
    title: "Cómo instalar Ubuntu en un ordenador",
    link: "https://www.hostinger.com.ar/tutoriales/como-instalar-ubuntu"
  }
]

export default function Page() {
  const p_content = <>
    <Typography style={{ fontSize: '1rem' }}>
      {material.map((row: any) => {
        return (
          <>
            <ListLinkItem
              icon={<ChevronRightOutlined htmlColor="#006EAF" />}
              link={row.link}
              title={row.title}
            />
          </>
        );
      })}
      {/* 
      <ListLinkItem
        icon={<ChevronRightOutlined htmlColor="#006EAF" />}
        link={'https://drive.google.com/file/d/1H0COwPY28acPIhz8fGGMpN467ZGMS4hg/view?usp=share_link'}
        title={"Códigos EMMET"}
      />
      <ListLinkItem
        icon={<ChevronRightOutlined htmlColor="#006EAF" />}
        link={'https://drive.google.com/file/d/1e8wOwxJp9gc7uQw8JKKa4MT-BCDTqJaC/view?usp=share_link'}
        title={"Comandos UNIX"}
      /> */}

    </Typography>

  </>;

  return (
    <PageContainer breadcrumb='Material Adicional' content={p_content}></PageContainer>
  );
};