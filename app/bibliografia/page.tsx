import PageContainer from '../ui/page-container';

export default function Page() {
  const p_content = <><p>Contenido para Bibliografía</p></>;

  return (
    <PageContainer breadcrumb='Bibliografía' content={p_content}></PageContainer>
  );
};