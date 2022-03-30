import HeroCategories from "./HeroCategories";
import HeroSearch from "./HeroSearch";
import { useLocation } from "react-router-dom";
function Hero() {
    const location = useLocation()

    if (location.pathname === "/") {
        return (
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <HeroCategories />
                        <HeroSearch />
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <HeroCategories />
                    <HeroSearch />
                </div>
            </div>
        </section>
    );
}

export default Hero;