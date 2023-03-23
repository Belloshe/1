import React, { useState } from 'react'
import pink from './assets/pink.jpeg'
import pinkm from './assets/pinkm.jpeg'
import pinkr from './assets/pinkr.jpeg'
import './App.css'

function getActiveClassName(activeArticle, currentArticle) {
  if (activeArticle === currentArticle) {
    return 'show-article'
  } else {
    return 'hide-article'
  }
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')

  return (
    <>
    <div className='article'>
      <article className={`smul ${getActiveClassName(activeArticle, 'First Article')}`} >
        <h1>About Me</h1>
        <p className='c'> Jag har gjort spel som tictactoe, guessing game, med hjälp utav html css och javascript,och vill lära mig mer.</p>
        <img  src={pink} alt="" />
      </article>
      <article className={`smul ${getActiveClassName(activeArticle, '2nd Article')}`} >
        <h3>Idea</h3>
        <p className='c'> I nästa uppgift skulle jag vilja göra ett portfolio.</p>
        <img src={pinkm} alt="" />

      </article>
      <article className={`smul ${getActiveClassName(activeArticle, '3rd Article')}`} >
        <h2>tema</h2>
        <p className='c'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, veniam?.</p>
        <img  src={pinkr} alt="" />
      </article>
      <button onClick={() => {
          setActiveArticle((a) => {
            if (a === 'First Article') {
              return '2nd Article'
            } else if (a === '2nd Article') {
              return '3rd Article'
            } else {
              return 'First Article'
            }
          })
        }}>Tap here to see more</button>

      </div>


    </>
  )
}

export default App