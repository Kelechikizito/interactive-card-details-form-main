import "./Cards.css";
import logo from '../assets/images/card-logo.svg'


const Cards = () => {
  return (
    <div className="cards">
      <div className="front-card">
        <div className='front-card-logo'><img src={logo} alt="card-logo" /></div>

        <div className="front-card-details">
          <h3 className="front-card-number">0000 0000 0000 0000</h3>
          <div>
            <p className="front-card-name">KELECHI UGWU</p>
            <p className="front-card-date">
              <span className="front-card-date-month">00</span> /
              <span className="front-card-date-year">00</span>
            </p>
          </div>
        </div>
      </div>

      <div className="back-card">
        <p className='back-card-cvv'>000</p>
      </div>
    </div>
  );
};

export default Cards;
