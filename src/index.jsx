import React from "react";
import ReactDOMClient from "react-dom/client";
import { TrollRunByHtmlTo } from "./screens/TrollRunByHtmlTo";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<TrollRunByHtmlTo />);
