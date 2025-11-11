import { Fragment } from "react";
import "./style.css";

export default function App(props) {
  return (
    <Fragment>
      <header className="app-header">
        <h1>{props.title}</h1>
        <h2>{props.rodapé}</h2>
      </header>
    </Fragment>
  );
}
 