import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/gallery";
import Reviews from "./pages/reviews";
import Flavors from "./pages/flavors";
import Join from "./pages/join";
import RootLayout from "./layout/rootlayout";

function App() {
  return (
    <Routes>
      {/* Parent route with layout */}
      <Route path="/" element={<RootLayout />}>
        {/* These are nested inside RootLayout via <Outlet /> */}
        <Route index element={<Home />} /> {/* "/" */}
        <Route path="flavors" element={<Flavors />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
