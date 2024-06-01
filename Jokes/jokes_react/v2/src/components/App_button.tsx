import React, {MouseEventHandler} from 'react'
import cssData from './App_button.module.css'

interface onClickProps {
    joke?: MouseEventHandler
}

const App_button: React.FC<onClickProps> = ({joke}: onClickProps) => {
    return (
        <button className={cssData.joke_btn} onClick={joke}>Get any joke</button>
    )
}
export default App_button