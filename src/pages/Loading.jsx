import Lottie from 'lottie-react';
import caranimation from "./car.json";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh" // full viewport height
      }}
    >
      <Lottie 
        animationData={caranimation}
        loop={true}
        style={{ width: "100px"}} // Set the width and height
      />
    </div>
  );
}

export default Loading;
