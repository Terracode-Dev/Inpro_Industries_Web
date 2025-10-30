import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,

} from "lucide-react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
//new update
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Inpro Industries</h3>
              <p className="text-slate-300">
                Where Passion Meets Precision in Printing
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+94779 402202 / +94717 302202 / +9476 7703531</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>inproindustries@yahoo.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  <p>
                    19<sup>th</sup> Lane, Mewella Road,Pethiyagoda, Kelaniya
                  </p>
                </p>
              </div>
            </div>
            <div>
              {/*<h3 className="text-xl font-semibold mb-4">Links</h3>
              <div className="space-y-2">
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-2000 delay-150 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-2.675 24h-4.5v-9.5h-3v-4h3v-3c0-3.1 1.9-4.8 4.6-4.8 1.3 0 2.5.1 2.8.2v3.2h-1.9c-1.5 0-1.8.7-1.8 1.7v2.1h3.6l-.5 4h-3.1V24z" />
                    </svg>
                    Visit Our Facebook Page
                  </button>
                </a>
              </div>*/}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>
              © {new Date().getFullYear()} Inpro Industries (Pvt) Ltd. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
