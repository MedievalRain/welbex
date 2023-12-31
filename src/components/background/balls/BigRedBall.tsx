import styled from "styled-components";
import { StyledBall } from "./StyledBall";

const BallWithShadow = styled(StyledBall)`
  fill: radial-gradient(
    82.3% 82.3% at 27.25% 26.5%,
    rgba(255, 208, 208, 0.54) 0%,
    rgba(212, 93, 93, 0.26) 59.67%,
    rgba(167, 49, 49, 0.25) 78.59%,
    rgba(130, 25, 25, 0.25) 100%
  );
  filter: drop-shadow(3px 6px 27px rgba(223, 125, 125, 0.25));
  backdrop-filter: blur(2px);
`;

function BigRedBall() {
  return (
    <BallWithShadow
      left="36%"
      top="83px"
      width="117"
      height="117"
      viewBox="0 0 117 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_0_13)">
        <circle
          cx="55.5"
          cy="52.5"
          r="41.5"
          fill="url(#paint0_radial_0_13)"
          fillOpacity="0.8"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_0_13"
          x="0"
          y="0"
          width="117"
          height="117"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_0_13"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="10"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_0_13"
          />
          <feOffset dx="3" dy="6" />
          <feGaussianBlur stdDeviation="13.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.87451 0 0 0 0 0.490196 0 0 0 0 0.490196 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_0_13"
            result="effect2_dropShadow_0_13"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_13"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_0_13"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(36.6175 32.995) rotate(51.0412) scale(68.3129)"
        >
          <stop stopColor="#FFD0D0" stopOpacity="0.67" />
          <stop offset="0.596678" stopColor="#D45D5D" stopOpacity="0.33" />
          <stop offset="0.785899" stopColor="#A73131" stopOpacity="0.31" />
          <stop offset="1" stopColor="#821919" stopOpacity="0.31" />
        </radialGradient>
      </defs>
    </BallWithShadow>
  );
}

export { BigRedBall };
