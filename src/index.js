import ReactDOM from "react-dom";
import App from "./App";

const notes = [
  {
    id: 1,
    content: "HTML Is Easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
    categories: ["Sport", "Hobby"],
  },
  {
    id: 2,
    content: "Browser Can Execute Only JS",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:30:31.298Z",
    important: true,
  },
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App notes={notes} />, rootElement);
