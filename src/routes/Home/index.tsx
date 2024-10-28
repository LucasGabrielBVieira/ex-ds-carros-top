import Header from '../../components/Header';
import './styles.css';
import CardCars from '../../components/CardCar/index';
import CardComments from '../../components/CardComments';
import Footer from '../../components/Footer';


function Home() {

    return( 
        <>
            <Header />
            <main>
                <section id="ds-ct-home-section">
                    <div className='ds-ct-cards-container'>
                        <h2>Venha nos visitar</h2>
                        <CardCars />
                        <CardCars />
                    </div>

                    <div className='ds-ct-cards-container ds-ct-cards-comments'>
                        <h2>O que estão dizendo</h2>
                        <CardComments />
                        <CardComments />
                        <CardComments />
                        <CardComments />
                        <CardComments />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );

}


export default Home