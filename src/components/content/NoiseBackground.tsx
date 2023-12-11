import styled from "styled-components";
import { BackgroundLight } from "../background/BackgroundLight";
import BackgroundMediumRedBall from "../background/balls/BackgroundMediumRedBall";
import PurpleSmallBall from "../background/balls/PurpleSmallBall";

const StyledNoiseBackground = styled.div`
  position: absolute;
  filter: blur(1px);
  width: 100%;
  height: 100%;
  z-index: -1;
`;

function NoiseBackground() {
  return (
    <StyledNoiseBackground>
      <BackgroundLight color="#961A1A" size={210} top="241px" left="-55px" />
      <BackgroundLight color="#833AB4" size={259} top="107px" left="90%" />
      <BackgroundMediumRedBall />
      <PurpleSmallBall />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        opacity="0.55"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.2"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="18"
              specularConstant="0.6"
              specularExponent="20"
              lighting-color="#9785af"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="93"></feDistantLight>
            </feSpecularLighting>
            <feColorMatrix
              type="saturate"
              values="0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="specularLighting"
              result="colormatrix"
            ></feColorMatrix>
          </filter>
        </defs>
        <rect width="700" height="700" fill="transparent"></rect>
        <rect
          width="700"
          height="700"
          fill="#9785af"
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>
    </StyledNoiseBackground>
  );
}

export { NoiseBackground };
