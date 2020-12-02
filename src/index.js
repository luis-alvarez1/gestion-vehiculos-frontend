import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloProvider from "./providers/ApolloProvider";

ReactDOM.render(ApolloProvider, document.getElementById("root"));
