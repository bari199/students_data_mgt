import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import ReadPage from "@/pages/read";
import EditPage from "@/pages/edit";
import CreatePage from "@/pages/create";
import StudentView from "@/components/studentview";
import SignupPage from "@/pages/signup";
import Login from "@/pages/login";
import ProtectedRoute from "@/auth/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<IndexPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/studentview/:id" element={<StudentView />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/read" element={<ReadPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Route>
    </Routes>
  );
}

export default App;
