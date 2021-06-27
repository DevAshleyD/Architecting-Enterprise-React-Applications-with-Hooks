import React, { useState } from "react";
import { LocalizationProvider } from "../contexts/localization";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  const [locale, setLocale] = useState("en-US");

  return (
    <LocalizationProvider locale={locale} setLocale={setLocale}>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}
