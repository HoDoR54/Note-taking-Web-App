import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";
import { NewNoteContextProvider } from "./Contexts/NewFormContext";
import { NotesContextProvider } from "./Contexts/NotesContext";
import { CurrentNoteContextProvider } from "./Contexts/CurrentNoteContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewNoteContextProvider>
      <NotesContextProvider>
        <CurrentNoteContextProvider>
          <App />
        </CurrentNoteContextProvider>
      </NotesContextProvider>
    </NewNoteContextProvider>
  </StrictMode>
);
