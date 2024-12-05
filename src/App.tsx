// src/App.tsx
import Hero from "./components/Hero";
import HorizontalScroll from "./components/HorizontalScroll";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <HorizontalScroll />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
