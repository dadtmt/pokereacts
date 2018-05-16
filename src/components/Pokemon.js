import React,{ Component } from 'react'

class Pokemon extends Component {

    render() {
        return <div>Pokemon:</div>
    }

    componentDidMount() {
        console.log('pokemon did mount')
        const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'
        fetch(url)
        .then(res => res.json())
        .then(pokemon => console.log(pokemon))
    }

}

export default Pokemon