import styled from "@emotion/styled";

const MainContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 200px;
  width: 1280px;

  @media (min-width: 751px) and (max-width: 1020px) {
    width: 900px;
  }

  @media (max-width: 750px) {
    width: 650px;
  }
`;

const MainContainerView = ({ children }: { children: React.ReactNode }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainContainerView;
