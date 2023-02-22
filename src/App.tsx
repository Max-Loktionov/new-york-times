import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import { JobIFace } from "./helpers/jobIFace";
import { fetchJobList } from "./services/API";
import "./App.css";

const JobBoard = lazy(() => import("./pages/JobBoard"));
const JobDetailed = lazy(() => import("./pages/JobDetailed"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  const [data, setData] = useState<JobIFace[]>([]);

  async function getJobList() {
    const response = await fetchJobList();
    setData(response);
  }

  useEffect(() => {
    getJobList();
  }, []);

  return (
    <BrowserRouter basename="/test-allab/">
      <div className="App">
        <Suspense fallback={<PropagateLoader color="#41d61f" />}>
          <Routes>
            <Route path="/" element={<JobBoard items={data} />} />
            <Route path="/:jobId" element={<JobDetailed data={data} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
