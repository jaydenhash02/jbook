import ReactDOM from "react-dom";
import CodeCell from "./components/code-cell";
// css library
import "bulmaswatch/superhero/bulmaswatch.min.css";

const App = () => {
  return (
    <div>
      <CodeCell />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
