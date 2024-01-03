import { useSelector, useDispatch } from 'react-redux';
import { moveCar } from './redux/actions';
import blueCarImg from './images/carBlue.png';
import redCarImg from './images/carRed.png';
import yellowCarImg from './images/carYellow.png';
import { ReduxState } from './types';

function Cars() {
  const carsGlobalState = useSelector((state: ReduxState) => state.carsReducer);
  const dispatch = useDispatch();

  return (
    <main className="cars-container">
      <h1>Clique nos carros para movê-los!</h1>
      <section className="road">
        <button
          className={ `car-button car-${carsGlobalState.redCar ? 'right' : 'left'}` }
          onClick={ () => dispatch(moveCar('redCar')) }
          type="button"
        >
          <img
            src={ redCarImg }
            alt="red car"
          />
        </button>
      </section>
      <section className="road">
        <button
          className={ `car-button car-${carsGlobalState.blueCar ? 'right' : 'left'}` }
          onClick={ () => dispatch(moveCar('blueCar')) }
          type="button"
        >
          <img
            src={ blueCarImg }
            alt="blue car"
          />
        </button>
      </section>
      <section className="road">
        <button
          className={ `car-button car-${carsGlobalState.yellowCar ? 'right' : 'left'}` }
          onClick={ () => dispatch(moveCar('yellowCar')) }
          type="button"
        >
          <img
            src={ yellowCarImg }
            alt="yellow car"
          />
        </button>
      </section>
    </main>
  );
}

export default Cars;
