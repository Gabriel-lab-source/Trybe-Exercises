import { Component } from 'react';

type LaureateProps = {
  name: string;
  motive: string;
};

export default class Laureate extends Component<LaureateProps> {
  render() {
    const { name, motive } = this.props;
    return (
      <>
        <h3>
          { name }
        </h3>
        <p>
          { motive }
        </p>
      </>
    );
  }
}
