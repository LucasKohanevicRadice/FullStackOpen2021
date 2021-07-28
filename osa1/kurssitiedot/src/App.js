import React from 'react'


const Part = (props) =>{
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Header = (props) => {

  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    
    <div>
      <Part part = {props.part_1} exercises = {props.exercises_1}/>
      <Part part = {props.part_2} exercises = {props.exercises_2}/>
      <Part part = {props.part_3} exercises = {props.exercises_3}/> 
    </div>

  )

}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.amount}
      </p>
    </div>
  )

}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>

      <Content part_1 = {part1} exercises_1 = {exercises1} 
                part_2 = {part2} exercises_2 = {exercises2}
                 part_3 = {part3} exercises_3 = {exercises3}/>

      <Total amount = {exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App









































// const Part = (props) =>{
//   return (
//     <div>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </div>
//   )
// }

// const Header = (props) => {

//   return (
//     <div>
//       <h1>
//         {props.course}
//       </h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
    
//     <div>
//       <Part part = {props.part_1} exercises = {props.exercises_1}/>
//       <Part part = {props.part_2} exercises = {props.exercises_2}/>
//       <Part part = {props.part_3} exercises = {props.exercises_3}/> 
//     </div>

//   )

// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises {props.amount}
//       </p>
//     </div>
//   )

// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course = {course}/>

//       <Content part_1 = {part1} exercises_1 = {exercises1} 
//                 part_2 = {part2} exercises_2 = {exercises2}
//                  part_3 = {part3} exercises_3 = {exercises3}/>

//       <Total amount = {exercises1+exercises2+exercises3} />
//     </div>
//   )
// }

// export default App

                                                // Part 1.2 wörkkii




// import React from 'react'


// const Header = (props) => {

//   return (
//     <div>
//       <h1>
//         {props.course}
//       </h1>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </div>

//   )

// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises {props.amount}
//       </p>
//     </div>
//   )

// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course = {course}/>
//       <Content part = {part1} exercises = {exercises1}/>
//       <Content part = {part2} exercises = {exercises2}/>
//       <Content part = {part3} exercises = {exercises3}/>
//       <Total amount = {exercises1+exercises2+exercises3} />
//     </div>
//   )
// }

// export default App

                                                  // Part 1.1 works

                                                  // ctrl + * = kommentointi
