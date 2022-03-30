import { Fragment } from 'react/cjs/react.production.min';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Humberger from '../components/Humberger/Humberger';
import Hero from '../components/Hero/Hero';
import Helmet from 'react-helmet';
import { useLocation } from "react-router-dom"

function Layout(props) {
    const pathname = useLocation()
    return pathname.pathname.includes("dangnhap") || pathname.pathname.includes("dangky") ? props.children : (
        <Fragment>

            <Helmet>
                <script src="/statics/js/jquery-3.3.1.min.js"></script>
                <script src="/statics/js/bootstrap.min.js"></script>
                <script src="/statics/js/jquery.nice-select.min.js"></script>
                <script src="/statics/js/jquery-ui.min.js"></script>
                <script src="/statics/js/jquery.slicknav.js"></script>
                <script src="/statics/js/mixitup.min.js"></script>
                <script src="/statics/js/owl.carousel.min.js"></script>
                <script src="/statics/js/main.js"></script>
            </Helmet>
            <Humberger />
            <Header />
            <Hero />
            <>
                {props.children}
            </>
            <Footer />
        </Fragment>
    );
}

export default Layout;