import { render } from "preact";
import App from "./components/index.tsx";

const root = globalThis.document.getElementById("root");
if (root) {
  render(<App />, root);
}
