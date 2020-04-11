import React from 'react'


const Header = ({ course: { name } }) => <h2>{name}</h2>

const Part = ({ part: { name, exercises } }) => <p>{name} {exercises}</p>

const Content = ({ course: { parts } }) => <div>{parts.map(part => <Part key={part.id} part={part} />)}</div>

const Total = ({ course: { parts } }) => <b>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b>

const Course = ({ course }) =>
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </div>

export default Course
