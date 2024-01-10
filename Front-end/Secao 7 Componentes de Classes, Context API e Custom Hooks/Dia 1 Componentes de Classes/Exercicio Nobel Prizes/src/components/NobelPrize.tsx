import { Component } from 'react';
import Laureate from './Laureate';

type NobelPrizeProps = {
  category: string;
  date: string;
  laureates: []
};

type LaureateArrayInfo = {
  knownName: {
    en: string;
  }
  orgName: {
    en: string;
  }
  motivation: {
    en: string;
  }
};

export default class NobelPrize extends Component<NobelPrizeProps> {
  render() {
    const { category, date, laureates } = this.props;
    return (
      <>
        <h2>
          { category }
        </h2>
        <h4>
          { date }
        </h4>
        {
          laureates.map((info: LaureateArrayInfo, index) => (
            <Laureate
              key={ index }
              name={ info.knownName && info.knownName.en
                ? info.knownName.en : info.orgName.en }
              motive={ info.motivation.en }
            />
          ))
        }
      </>
    );
  }
}
