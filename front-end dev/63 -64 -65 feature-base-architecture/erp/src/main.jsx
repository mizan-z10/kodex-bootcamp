import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./app/routes/AppRoutes.jsx";
import { AuthContextProvide } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
 
   <AuthContextProvide>
    <AppRoutes />
  
   </AuthContextProvide>
);
