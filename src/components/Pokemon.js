import React,{ Component } from 'react'

class Pokemon extends Component {

    constructor() {
        super()
        this.state = {
            pokemon: {
                name: 'Loading...'
            }
        }
    }
    render() {
        return <div>Pokemon: {this.state.pokemon.name}</div>
    }

    componentDidMount() {
        console.log('pokemon did mount')
        const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'
        fetch(url)
        .then(res => res.json())
        .then(pokemon => this.setState(prevState => ({ pokemon })))
    }

}

export default Pokemon
