import { BackgroundLight } from "./BackgroundLight";
import { BigRedBall } from "./balls/BigRedBall";
import SmallRedBall from "./balls/SmallRedBall";
import PurpleBall from "./balls/PurpleBall";

function Background() {
  return (
    <>
      <BackgroundLight color="#961A1A" size={311} left={"-102px"} top={"25%"} />
      <BackgroundLight color="#833AB4" size={259} left={"41%"} top={"-154px"} />
      <SmallRedBall />
      <BigRedBall />
      <PurpleBall />
    </>
  );
}

export { Background };
