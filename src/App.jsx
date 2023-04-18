import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("./pages/TweetPage/TweetPage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Downloading...</>}>
        <Routes>
          <Route path="/tweeters_test/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/tweeters_test/tweets/" element={<TweetsPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
