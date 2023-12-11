import { BackgroundLight } from "./BackgroundLight";
import { BackgroundBigRedBall } from "./balls/BackgroundBigRedBall";
import BackgroundSmallRedBall from "./balls/BackgroundSmallRedBall";
import PurpleBall from "./balls/PurpleBall";

function Background() {
  return (
    <>
      <BackgroundLight color="#961A1A" size={311} left={"-102px"} top={"25%"} />
      <BackgroundLight color="#833AB4" size={259} left={"41%"} top={"-154px"} />
      <BackgroundSmallRedBall />
      <BackgroundBigRedBall />
      <PurpleBall />
    </>
  );
}

export { Background };
