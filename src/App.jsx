import { Business } from "./components/Business";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header"
import { Media } from "./components/Media";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <Media />
      <Card />
      <Business />
      <Form />
      <Footer />
    </div>

  )

}

export default App
