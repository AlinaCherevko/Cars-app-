import { Route, Routes } from "react-router";
// import { FilterPage } from "./pages/FilterPage/FilterPage";
// import { ResultPage } from "./pages/ResultPage/ResultPage";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const FilterPage = lazy(() => import("./pages/FilterPage/FilterPage"));
const ResultPage = lazy(() => import("./pages/ResultPage/ResultPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<FilterPage />} />
        <Route path="/result/:makeId/:year" element={<ResultPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
