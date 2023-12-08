import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: 224px;
  height: 200px;
  position: absolute;
  top: 100px;
  left: 12px;
  text-align: center;
  overflow: hidden;
  p {
    position: absolute;
    width: 100%;
    line-height: 1.4;
    top: 100px;
    left: 0;
    font-family: initial;
    letter-spacing: 6px;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.35);
  }
  .dragon {
    width: 80px;
    height: 86px;
    margin: 0 auto;
    background-position: 0 -100px;
    &.r1,
    &.l1 {
      background-position: 0 -100px;
    }
    &.r2,
    &.l2 {
      background-position: -100px -100px;
    }
    &.r3,
    &.l3 {
      background-position: -200px -100px;
    }
    &.r4,
    &.l4 {
      background-position: -300px -100px;
    }
    &.l1,
    &.l2,
    &.l3,
    &.l4 {
      transform: scale(-1, 1);
      -webkit-transform: scale(-1, 1);
      -ms-transform: scale(-1, 1);
      -moz-transform: scale(-1, 1);
      -o-transform: scale(-1, 1);
    }
  }
`;
