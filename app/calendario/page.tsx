import PageContainer from '../ui/page-container';

export default function Page() {
  const p_content = <><p>Contenido para Calendario</p></>;

  return (
    <PageContainer breadcrumb='Calendario' content={p_content}></PageContainer>
  );
};