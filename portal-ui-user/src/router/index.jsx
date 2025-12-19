import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import PosPage from "../pages/PosPage";
import OrdersRealtimePage from "../pages/OrdersRealtimePage";
import { PosUrl, OrdersRealtimeUrl } from "../routers/urls";
import Header from "../components/header/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Box style={{ display: "flex" }}>

        <Box style={{ flex: 1, padding: 16 }}>
          <Routes>
            <Route path={PosUrl.list} element={<PosPage />} />
            <Route
              path={OrdersRealtimeUrl.list}
              element={<OrdersRealtimePage />}
            />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default AppRouter;
