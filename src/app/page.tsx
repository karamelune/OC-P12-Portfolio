import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { SideNavigation } from './components/SideNavigation';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { ScrollProgress } from './components/ScrollProgress';

export default function Home() {
    return (
        <main className="relative flex flex-col items-center justify-center">
            {/* Page progression */}
            <ScrollProgress />

            {/* Side navigation buttons */}
            <SideNavigation />

            {/* Hero */}
            <Hero />

            {/* About section */}
            <About />

            {/* Projects */}
            <Projects />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />
        </main>
    );
}
