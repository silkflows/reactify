import { useContext } from "react";
import { ThemeContext } from "../main"; // Import the named export

const Child = () => {
  // 1. Access context value using useContext hook
  const passedValue = useContext(ThemeContext);

  return (
    <div>
      {/* 2. Use the value directly */}
      <h4>This is child component and name is {passedValue}</h4>
      
      {/* Alternative using Consumer (less common with hooks) */}
      <ThemeContext.Consumer>
        {(themeValue) => (
          <p>Consumer pattern value: {themeValue}</p>
        )}
      </ThemeContext.Consumer>
    </div>
  );
};

export default Child;