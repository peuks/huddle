import React from "react";
import styled from "styled-components";
import { illustrationMockups, logo } from "../../assets/images";

const Home = () => {
  return (
    <>
      <Header className=" wrapp">
        <Logo>
          <img src={logo} alt="" />
        </Logo>
      </Header>

      <Content className="">
        <Section className="container wrapp">
          <img src={illustrationMockups} alt="" />
          <Content2 className="spacing">
            <Title>Build The Community Your Fans Will Love</Title>
            <Copy>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </Copy>
            <Button>Register</Button>
          </Content2>
        </Section>
        <Footer className="container wrapp">
          <nav>
            <img src="http://fakeimg.pl/64x64?font=lobster" alt="" />
            <img src="http://fakeimg.pl/64x64?font=lobster" alt="" />
            <img src="http://fakeimg.pl/64x64?font=lobster" alt="" />
          </nav>
        </Footer>
      </Content>
    </>
  );
};

const Footer = styled.footer`
  display: flex;
  justify-content: end;
  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  img {
    width: auto;
  }
`;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(248px, 50vw, 350px), 1fr)
  );
  gap: var(--spacer);
  img {
    max-width: 664px;
  }
`;
const Button = styled.div``;
const Copy = styled.div``;
const Header = styled.header`
  img {
    width: 10rem;
  }
`;
const Content2 = styled.div``;
const Logo = styled.div``;
const Title = styled.h1``;
const Content = styled.main`
  > * {
    margin-left: auto;
    margin-right: auto;
  }
`;
export default Home;
