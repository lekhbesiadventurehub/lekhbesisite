import { Toaster } from 'sonner';
import {
  Contact,
  Footer,
  Header,
  Hero,
  Packages,
  Services,
  Trips,
  Vehicles,
  WhatsAppButton,
  WhyUs,
} from './components';

const App = () => (
  <>
    <Header />
    <main id="main-content">
      <Hero />
      <Services />
      <Trips />
      <Vehicles />
      <Packages />
      <WhyUs />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
    {/* Bottom-left, clear of the floating WhatsApp button. */}
    <Toaster position="bottom-left" toastOptions={{ classNames: { toast: 'font-sans' } }} />
  </>
);

export default App;
