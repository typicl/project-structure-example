import { Title } from "components/Title";
import { Button } from "../Button";
import styles from "./index.module.scss";

function App() {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div className={styles.app}>
      <Title text="Very cool stuff" />
      <div>
        <Button isActive text="Clicky" onClick={handleClick} />
        <Button text="Wowwow" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
