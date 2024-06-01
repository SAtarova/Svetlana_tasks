import React from 'react'
import cssOutput from './App-joke.module.css'
import {IJoke} from '../interfaces'

interface JokeProps {
    jokeStructure: IJoke
}

const App_joke: React.FC<JokeProps> = ({jokeStructure}) => {
    return (
        <div className={cssOutput.joke}>
            <p className={cssOutput.joke_setup}>{jokeStructure.setup}</p>
            <p className={cssOutput.joke_punchline}>{jokeStructure.punchline}</p>
            <div className={cssOutput.joke_info}>
                <p className={cssOutput.joke_type}>{jokeStructure.type}</p>
                <p className={cssOutput.joke_id}>{jokeStructure.id}</p>
            </div>
        </div>
    )
}

export default App_joke