import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const votesInit = Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(votesInit)
  const [selected, setSelected] = useState(0)

  const anecdoteHandler = () => {
    const next = Math.round(Math.random() * (props.anecdotes.length - 1));
    setSelected(next)
  }

  const voteHandler = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  const votesMax = Math.max(...votes)
  const mostVotes = anecdotes[votes.indexOf(Math.max(votesMax))]

  const disabled = false // If allowing only one vote: votes[selected] !== votesInit[selected]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <button disabled={disabled} onClick={voteHandler}>vote</button>
      <button onClick={anecdoteHandler}>next anecdote</button>
      <div>has {votes[selected]} votes</div>
      <div>{props.anecdotes[selected]}</div>
      <h1>Anecdote with most votes</h1>
      <div>{mostVotes}</div>
      <div>has {votesMax} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)