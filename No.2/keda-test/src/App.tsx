import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Schedule } from "./components/Schedule";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Schedule/>
      </main>
    </>
  );
}

export default App;
