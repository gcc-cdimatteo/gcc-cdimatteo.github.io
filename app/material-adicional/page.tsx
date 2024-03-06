import PageContainer from '../ui/page-container';

export default function Page() {
  const p_content = <><p>Contenido para Material Adicional</p></>;

  return (
    <PageContainer breadcrumb='Material Adicional' content={p_content}></PageContainer>
  );
};