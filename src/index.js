import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://d76fd96adda8459dadf07249de42b5a0@o494006.ingest.sentry.io/5938301",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
