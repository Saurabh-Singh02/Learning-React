import '../App';
import Home from './main-sub-component/home';
import About from './main-sub-component/about';
import Contact from './main-sub-component/contact';

function Main() {
    return (
        <>
            <div className='main'>
                <Home />
                <About />
                <Contact />
            </div>
        </>
    );
}

export default Main;
