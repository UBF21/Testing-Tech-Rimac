
import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "../nav/Nav";
import { Footer } from "../footer/Footer";


export const Layout = () => {

    const location = useLocation();

    const routesWithGradient = [
        '/'
    ];

    const shouldHaveGradient = () =>  routesWithGradient.includes(location.pathname);

    const mainClass = shouldHaveGradient() 
        ? "main-content bg-gradient" 
        : "main-content";

    return (
        <div className="layout-container">
            <Nav />
            <main className={mainClass}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};