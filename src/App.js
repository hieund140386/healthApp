import { Routes, Route } from "react-router-dom";
import MyChallengePage from "./pages/MyChallenge";
import MyColumnPage from "./pages/MyColumn";
import MyNotificationPage from "./pages/MyNotification";
import MyRecordPage from "./pages/MyRecord";
import Layout from "./components/layout";
import TopPage from "./pages/TopPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/my-record" element={<MyRecordPage />} />
        <Route path="/my-challenge" element={<MyChallengePage />} />
        <Route path="/my-notification" element={<MyNotificationPage />} />
        <Route path="/my-column" element={<MyColumnPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
