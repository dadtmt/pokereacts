import React,{ Component } from 'react'

class Pokemon extends Component {

    constructor() {
        super()
        this.state = {
            loading: true,
            pokemon: {
                name: ''
            }
        }
    }
    render() {
        return <div>
            { this.state.loading && <p>Loading</p> }
            <p>Pokemon: {this.state.pokemon.name}</p>
        </div>
    }

    componentDidMount() {
        console.log('pokemon did mount')
        const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'
        fetch(url)
        .then(res => res.json())
        .then(pokemonRes => this.setState(
            prevState => ({ 
                loading: false,
                pokemon: pokemonRes 
            })
        ))
    }

}

export default Pokemon
