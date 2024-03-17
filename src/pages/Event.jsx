
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero-section/Hero';
import EventImg from '@/assets/teach8.jpg';
import Footer from '@/components/footer/Footer';
import Event from '@/components/events/Event';





function EventPage() {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={EventImg}
                title="Events"
            />


            <Event />

            <Footer />

        </div>
    );
}

export default EventPage;