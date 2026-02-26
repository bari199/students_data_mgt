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



function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<StudentView />} path="/studentview/:id" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<ReadPage />} path="/read" />
      <Route element={< EditPage />} path="/edit" />
      <Route element={<CreatePage />} path="/create" />

    </Routes>
  );
}

export default App;
