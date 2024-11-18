import { useState } from "react";
import "./App.css";
import "./global.css";
import Button from "./core/compoennts/button/button";
function App() {
  const [isPulsing, setIsPulsing] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    // Trigger the pulse effect by setting isPulsing to true
    setIsPulsing(true);

    // Remove the pulse effect after the animation duration (1 second here)
    setTimeout(() => {
      setIsPulsing(false);
    }, 1000);
  };
  const autoChangeLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      {/* <button
        className={`${classes.button} ${isPulsing ? classes.pulseEffect : ""}`}
        onClick={handleClick}
      >
        <span>
          <Loader />
        </span>
        Click me
      </button> */}
      {/* <Button variant="solid" size="md">
        Click Me
      </Button> */}
      {/* <Button size={{ xs: "10px" }} isLoading loadingText="Processing...">
        Submit
      </Button> */}
      <Button
        variant="outline"
        // size={"sm"}
        isLoading={loading}
        // loadingText="Loading"
        onClick={autoChangeLoader}
      >
        Click Me
      </Button>
    </>
  );
}

export default App;
