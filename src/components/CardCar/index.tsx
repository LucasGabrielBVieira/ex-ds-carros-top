import './styles.css'
import carImg from '../../assets/car-card.png'

function Card() {

    return(
        <div className='ds-ct-card-car-container'>
            <img src={carImg} alt="" />
            <p>Lorem ipsum dolor</p>
        </div>
    );

}

export default Card