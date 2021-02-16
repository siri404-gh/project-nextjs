import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export const removeJSS = () => {
  const jssStyles = document.querySelector('#jss-server-side');
  if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
};

export const initiateSentry = () => {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    autoSessionTracking: true,
    integrations: [
      new Integrations.BrowserTracing(),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
};
