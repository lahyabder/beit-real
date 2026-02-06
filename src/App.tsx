import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { Poets } from './pages/Poets';
import { Archive } from './pages/Archive';
import { Publications } from './pages/Publications';
import { Reports } from './pages/Reports';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/poets" element={<Poets />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
