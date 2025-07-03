import './App.css';
import Courses from './assets/components/Courses/courses';
import Footer from './assets/components/Footer/Footer';
import Navbar from './assets/components/Navbar/Navbar';
import WhatsappButton from './assets/components/WhatsappButton/WhatsappButton'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Courses />
            <Footer />
            <WhatsappButton />
        </div>
    );
}

export default App;
