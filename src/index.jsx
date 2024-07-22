import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Lp } from "./screens/Lp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Lp />);
