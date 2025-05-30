import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css'; // 必要なら
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { AuthProvider } from "./contexts/AuthContext";

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID || "",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage", // 必須：セッション持続のため
    storeAuthStateInCookie: false,
  },
});

async function main() {
  try {
    await msalInstance.initialize();
    await msalInstance.handleRedirectPromise();

    const root = ReactDOM.createRoot(document.getElementById("root")!);
    root.render(
      <React.StrictMode>
        <MsalProvider instance={msalInstance}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </MsalProvider>
      </React.StrictMode>
    );
  } catch (e) {
    console.error("MSAL 初期化エラー:", e);
  }
}

main();