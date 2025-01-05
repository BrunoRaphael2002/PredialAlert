import Header from "../components/headder";
import Banner from "../components/Banner";
import Features from "../components/funcionalidades";
import About from "../components/Sobre";
import Plans from "../components/planos";
import Services from "../components/Servico";
import Testimonials from "../components/depoimentos";
import FAQ from "../components/FAQ";
import Footer from "../components/Rodape";
import GlobalStyles from "./GlobalStyles";


function App() {
 

  return (
    <>
        <GlobalStyles />
      <Header />
      <Banner />
      <Features />
      <Services />
      <About/>
      <Testimonials />
      <Plans />
      <FAQ />
      <Footer />

    </>
  )
}

export default App
