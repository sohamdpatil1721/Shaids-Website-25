import { Player } from "@lottiefiles/react-lottie-player";

const LottieAnimation = ({ animationPath, width = 150, height = 150 }) => {
  return (
    <Player
      autoplay
      loop
      src={animationPath} // Path to your JSON animation
      style={{ width, height }}
    />
  );
};

export default LottieAnimation;
