import { Fragment } from "react";

export default function App(props) {
  return(
    <Fragment>

    <h1>{props.title}</h1>
    <h2>{props.rodapé}</h2>
 
    </Fragment>
  )
}