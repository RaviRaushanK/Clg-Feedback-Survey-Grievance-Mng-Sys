import { Navigate, Route, Routes } from "react-router-dom";
import DevelopmentPreview from "./pages/DevelopmentPreview";
import PrincipalLayout from "./layouts/PrincipalLayout";
import HodLayout from "./layouts/HodLayout";
import FacultyLayout from "./layouts/FacultyLayout";
import StudentLayout from "./layouts/StudentLayout";
import PrincipalDashboard from "./pages/principal/PrincipalDashboard";
import HodDashboard from "./pages/hod/HodDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DevelopmentPreview />} />
      <Route path="/principal" element={<PrincipalLayout />}>
        <Route path="dashboard" element={<PrincipalDashboard />} />
      </Route>
      <Route path="/hod" element={<HodLayout />}>
        <Route path="dashboard" element={<HodDashboard />} />
      </Route>
      <Route path="/faculty" element={<FacultyLayout />}>
        <Route path="dashboard" element={<FacultyDashboard />} />
      </Route>
      <Route path="/student" element={<StudentLayout />}>
        <Route path="dashboard" element={<StudentDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
