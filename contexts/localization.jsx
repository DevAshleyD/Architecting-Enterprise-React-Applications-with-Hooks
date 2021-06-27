import React, { createContext } from "react";
import localization from "../localization.json";

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ locale, setLocale, children }) => (
  <LocalizationContext.Provider
    value={{
      locale,
      setLocale,
      localizedStrings: localization[locale],
    }}
  >
    {children}
  </LocalizationContext.Provider>
);
