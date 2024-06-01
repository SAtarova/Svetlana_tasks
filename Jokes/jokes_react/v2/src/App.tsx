import React, {useState} from 'react'
import './App.css'
import App_button from './components/App_button'
import App_joke from './components/App_joke'
import {IJoke} from './interfaces'

const listJokes: IJoke[] = []
const App = () => {
    const [joke, setJoke] = useState<IJoke>()

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
        fetch('https://official-joke-api.appspot.com/random_joke', {method: 'GET'})
            .then((res) => res.json())
            .then((result) => {
                setJoke(result)
                listJokes.unshift(result)
            })
    }

    return (
        <div className="joke_container">
            <App_button joke={handleClick}/>
            {joke && listJokes.map(joke => <App_joke key={joke.id} jokeStructure={joke}/>)}
        </div>
    )
}

export default App
