import React, { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

export default class PersonDetails extends Component {
  constructor() {
    super();
    this.state = {
      person: undefined,
      loading: true,
    }
  }

  componentDidMount() {
    const URL = 'https://api.randomuser.me/';
    fetch(URL)
    .then((response) => response.json())
    .then((data) => this.setState({
      person: data.results,
      loading: false,
    }));
  }

  getElements(user) {
    return {
      nome: `${ user.name.first } ${ user.name.last }`,
      email: user.email,
      image: user.picture.thumbnail,
      age: user.dob.age,
    }
  }

  render() {
    const { loading, person } = this.state;
    if (loading) return <Loading />
    return (
      <div>
        { console.log(person) }
        <PersonCard person={ this.getElements(person[0]) } />
      </div>
    )
  }
}
