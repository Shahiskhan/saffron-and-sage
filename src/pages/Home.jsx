import Hero from "../components/sections/Hero";
import FeaturedDishes from "../components/sections/FeaturedDishes";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import CTABanner from "../components/sections/CTABanner";

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedDishes />
            <WhyChooseUs />
            <Testimonials />
            <CTABanner />
        </>
    );
}