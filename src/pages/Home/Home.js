import React from "react";
import styled from "styled-components";
import {
  Supervisor,
  TeamBuilder,
  Karma,
  Calculator,
} from "../../assets/images";
import { device } from "../../components/styles/mq";
const Home = () => {
  return (
    <Main className="flex">
      <StyledDiv
        className="cards container wrapp 
      "
      >
        <Header className="spacing">
          <Title classname="cards__title">
            Reliable, efficient delivery
            <span>Powered by Technology</span>
          </Title>
          <Copy className="cards__copy wrapp">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </Copy>
        </Header>
        <Cards className="cards grid">
          <Card className="card card--A shadow-xl wrapp">
            <h4 className="card__title">Supervisor</h4>
            <p className="card__copy">
              Monitors activity to identify project roadblocks
            </p>
            <img src={Supervisor} alt="Supervisor" />
          </Card>
          <Card className="card card--B shadow-xl wrapp">
            <h4> Team Builder </h4>
            <p className="card__copy">
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img alt="img" src={TeamBuilder} />
          </Card>
          <Card className="card card--C shadow-xl wrapp">
            <h4>Karma Regularly</h4>
            <p className="card__copy">evaluates our talent to ensure quality</p>
            <img src={Karma} alt="Karma" />
          </Card>
          <Card className="card card--D shadow-xl wrapp">
            <h4>Calculator</h4>
            <p className="card__copy">
              Uses data from past projects to provide better delivery estimates
            </p>
            <img src={Calculator} alt="Calculator" />
          </Card>
        </Cards>
      </StyledDiv>
    </Main>
  );
};

const Cards = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
  > * {
    margin-left: auto;
    margin-right: auto;
  }
`;
const Header = styled.header`
  max-width: 40rem;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacer);
  .cards {
    &__copy {
    }
  }
`;
const Copy = styled.p`
  color: var(--clr-3);
  &.wrapp {
    --pading: 2rem 1rem;
  }
`;
const Card = styled.article`
  border-radius: var(--rounded-md);
  h4 {
    color: var(--clr-5);
  }
  img {
    width: 3rem;
    height: 3rem;
    margin-left: auto;
  }
  color: var(--clr-3);
  &.wrapp {
    /* --pading: 1rem 0.5rem; */
  }
  &.card {
    &--A,
    &--B,
    &--C,
    &--D {
      grid-column: 1/-1;
    }
  }
  &.card {
    display: flex;
    flex-direction: column;
    min-height: 12.975rem;
    --spacer: 0.5rem;
    gap: var(--spacer);
    &--A {
      border-top: solid 0.25rem var(--clr-1);

      @media ${device.laptop} {
        grid-column: 1/5;
        grid-row: 1/3;
        margin-top: auto;
        margin-bottom: auto;
      }
    }
    &--B {
      border-top: solid 0.25rem var(--clr-2);

      @media ${device.laptop} {
        grid-column: 5/9;
      }
    }
    &--C {
      border-top: solid 0.25rem var(--clr-3);

      @media ${device.laptop} {
        grid-column: 5/9;
      }
    }
    &--D {
      border-top: solid 0.25rem var(--clr-4);

      @media ${device.laptop} {
        grid-column: 9/13;
        grid-row: 1/3;
        margin-top: auto;
        margin-bottom: auto;
      }
    }
  }
`;
const Title = styled.h1`
  font-size: clamp(1rem, 1rem + 2.27vw, 1.749rem);
  font-weight: 200;
  text-align: center;
  span {
    display: block;
    font-weight: 700;
  }
`;

export default Home;
