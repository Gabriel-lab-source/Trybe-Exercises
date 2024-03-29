import { useSelector, useDispatch } from 'react-redux';
import { changeSignal } from './redux/actions';
import redSignal from './images/redSignal.png';
import greenSignal from './images/greenSignal.png';
import yellowSignal from './images/yellowSignal.png';
import { Signals, ReduxState } from './types';

const renderSignal = (signalColor: Signals) => {
  switch (signalColor) {
    case 'red':
      return redSignal;
    case 'green':
      return greenSignal;
    case 'yellow':
      return yellowSignal;
    default:
      return '';
  }
};

function TrafficSignal() {
  const trafficSignalGS = useSelector((state: ReduxState) => state.trafficSignalReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className="traffic-button-container">
        <button
          className="traffic-button red"
          type="button"
          onClick={ () => dispatch(changeSignal('red')) }
        >
          Red
        </button>
        <button
          className="traffic-button yellow"
          type="button"
          onClick={ () => dispatch(changeSignal('yellow')) }
        >
          Yellow
        </button>
        <button
          className="traffic-button green"
          type="button"
          onClick={ () => dispatch(changeSignal('green')) }
        >
          Green
        </button>
      </div>
      <div className="traffic-light-container">
        <img
          className="traffic-light"
          src={ renderSignal(trafficSignalGS.color) }
          alt="traffic light"
        />
      </div>
    </>
  );
}

export default TrafficSignal;
