import AnchorPage from "../element/AnchorPage";

const PageLayout = ({ svg, name, children }) => {
  return (
    <div
      className={`min-h-max py-12 md:py-16 lg:min-h-dvh lg:max-h-max lg:py-4  flex flex-col `}
    >
      <AnchorPage svg={svg}>{name}</AnchorPage>
      {children}
    </div>
  );
};

export default PageLayout;
