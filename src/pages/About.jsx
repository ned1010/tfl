
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/hero-section/Hero';
import AboutImg from "@/assets/about.jpg";
import Footer from '@/components/footer/Footer';
import About from '@/components/about/About';
import VolunteerLink from '../components/volunteer-form/VolunteerLink';


function AboutPage() {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title="About"
            />
            <About />
            <VolunteerLink />
            <Footer />

        </div>
    );

}
export default AboutPage;