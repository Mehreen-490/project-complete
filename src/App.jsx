import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import LabsPage from "./pages/LabsPage";
import WithNav from "./WithNav";
import WithoutNav from "./WithoutNav";
import WithNavHeader from "./WithNavHeader";
import SeriesPage from "./pages/SeriesPage";
import AllTopics from "./components/HomePageComponents/AllTopics";
import Languages from "./components/HomePageComponents/Languages";
import FrameWorks from "./components/HomePageComponents/FrameWorks";
import Techniques from "./components/HomePageComponents/Techniques";
import AllLinksPage from "./pages/AllLinksPage";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/labs" element={<LabsPage />} />
        </Route>
        <Route path="/" element={<WithNavHeader />}>
          <Route index element={<HomePage />} />
          <Route path="all" element={<AllTopics />} />
          <Route path="frameworks" element={<FrameWorks />} />
          <Route path="languages" element={<Languages />} />
          <Route path="techniques" element={<Techniques />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/links" element={<AllLinksPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
