import "./App.css";
import {
  BrowserRouter as NavigatorWrapper,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Vans as ListOfVans } from "./pages/Vans";
import { Vandetails } from "./pages/Vans/Vandetails";
import "./server/server";
import { QueryClient, QueryClientProvider } from "react-query";
import { Dashboard as AdminDashboard } from "./pages/Host/Dashboard";
import { Income as AdminIncome } from "./pages/Host/Income";
import { Reviews as AdminReviews } from "./pages/Host/Reviews";
import { Vans } from "./pages/Host/HostVans";
import { HostLayout as AdminLayout } from "./components/HostLayout";
import { Layout as RoutesLayout } from "./components/Layout";
import { VansDetail } from "./pages/Host/Vans-Admin/VansDetail";
import VanInfo from "./pages/Host/Vans-Admin/VansInfo";
import VansPrice from "./pages/Host/Vans-Admin/VansPrice";
import VansPhoto from "./pages/Host/Vans-Admin/VansPhoto";
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigatorWrapper>
          <Routes>
            <Route path="/" element={<RoutesLayout />}>

              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<ListOfVans />} />
              <Route path="vans/:id" element={<Vandetails />} />

              <Route path="host" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="income" element={<AdminIncome />} />
                <Route path="reviews" element={<AdminReviews />} />
                <Route path="vans" element={<Vans />} />
                
                <Route path="vans/:id" element={<VansDetail />}>
                  <Route index element={<VanInfo />} />
                  <Route path="pricing" element={<VansPrice />} />
                  <Route path="photos" element={<VansPhoto />} />
                </Route>

              </Route>
            </Route>
          </Routes>
        </NavigatorWrapper>
      </QueryClientProvider>
    </>
  );
}

export default App;
