import { createGlobalStyle } from "styled-components";
import { device } from "./mq";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Poppins:400");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
:root {
  --clr-1: ${(props) => props.theme.bg_Violet};
  --clr-2: ${(props) => props.theme.bg_SoftMagenta};
  --clr-3: ${(props) => props.theme.bg_VeryLightGray};


  --dark80: rgba(48, 79, 89, 0.8);
  --dark60: rgba(48, 79, 89, 0.6);
  --transition: all 0.3s ease 0s;

  --ff: ${(props) => props.theme.font};
  --fw-reg: 400;
  --fw-bold: 600;
  --fs-h1: 2.2rem;
  --fs-h2: 2rem;
  --fs-h3: 1.6rem;
  --fs-h4: 1.4rem;
  --fs-h5: 1.2rem;
  --fs-body: 1rem;

  // Espacements
  --spacer:1rem;

  // Shadow


--rounded-none: 0px;
--rounded-sm: 0.125rem;
--rounded: 0.25rem;
--rounded-md: 0.375rem;
--rounded-lg: 0.5rem;
--rounded-xl: 0.75rem;
--rounded-2xl: 1rem;
--rounded-3xl: 1.5rem;
--rounded-full: 9999px;
}

/* Reset class*/

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  height: 100vh;
  min-height: 100vh;  
  font-size: clamp(100%, calc(1rem + 2vw), 24px);
}

body {

  align-items: stretch;
  display: flex;
  display: flex;
  flex-flow: column;
  font-family: var(--ff);
  height: 100vh;
  min-height: 100vh;
  line-height: 1.5;
  color: var(--clr-3);
  background-color: var(--clr-1);
  background-image: url("assets/images/bg-mobile.svg");


}

img {
  display: block;
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
}

a {
  text-decoration: none;
}
ul {
  list-style-type: none;
}

.wrapp {
  --pading: 2rem clamp(0.8rem, 2vw + 1rem, 3rem);
  padding: var(--pading, 4rem);
  
}
.spacing > * + * {
  margin-top: var(--spacer, 2rem);
}


.center {
  --direction: column;
  align-items: center;
  flex-direction: var(--direction, column);
  height: 100%;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}

.container {
   /* @media screen and (min-width: 640px) {
     max-width: 640px;
   }
   @media screen and (min-width: 768px) {
     max-width: 768px;
   }
   @media screen and (min-width: 1024px) {
     max-width: 1024px;
   }
   @media screen and (min-width: 1280px) {
     max-width: 1280px;
   } */
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
}



.split {
  --gap: 2em;

  gap: var(--gap);
  flex-wrap: wrap;
  justify-content: center;

  // & > * {
  //   --min-width: 15em;
  //   --flex-basis: 30%;
  //   flex-basis: var(--flex-basis, 30%);
  //   min-width: var(--min-width, 15em);
  // }
  &__item {
    // --min-width: 15em;
    // min-width: var(--min-width, 15em);
    // ! min width is the same as flex-basis
    --flex-basis: 30%;
    flex-basis: var(--flex-basis, 30%);
  }
}

/* shadow */
.shadow-sm
{

  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow{
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md{

  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg{

  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl{

  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-2xl{

  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-inner{

  --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-none{

  --tw-shadow: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

`;

export { GlobalStyle };
