import SEO from "../common/seo";
import Home from "../components/homes/home";
import Wrapper from "../layout/wrapper";


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'تماس با سرویس'} />
      <Home />
    </Wrapper>
  );
};

export default index;