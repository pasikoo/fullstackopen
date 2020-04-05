import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = `${(good / all) * 100} %`

    if (!all > 0) return 'No feedback given';
    return (
        <table><tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
        </tbody></table>)
}

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({ title, clickHandler }) => <button onClick={clickHandler}>{title}</button>

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToGoodValue = newValue => {
        setGood(newValue)
    }
    const setToNeutralValue = newValue => {
        setNeutral(newValue)
    }
    const setToBadValue = newValue => {
        setBad(newValue)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button title="good" clickHandler={() => setToGoodValue(good + 1)} />
            <Button title="neutral" clickHandler={() => setToNeutralValue(neutral + 1)} />
            <Button title="bad" clickHandler={() => setToBadValue(bad + 1)} />

            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)