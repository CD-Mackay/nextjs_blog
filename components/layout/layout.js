import Navigation from "./navigation";
import { Fragment } from "react";
import Logo from "./logo";

export default function Layout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
