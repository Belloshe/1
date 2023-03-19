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
      <article className={`smul ${getActiveClassName(activeArticle, 'First Article')}`} >
        <h1>About Me</h1>
        <p className='c'> Jag har gjort spel som tictactoe, guessing game och även hemsidor, med hjälp utav html css och javascript,jag hade velat lära mig mer react och förbättra mina kunskaper.</p>
        <img className='pink' src={pink} alt="" />
      </article>
      <article className={`pick ${getActiveClassName(activeArticle, '2nd Article')}`} >
        <h1>Idea</h1>
        <p className='c'> I nästa uppgift skulle jag vilja göra ett portfolio.</p>
        <img className='pinkm' src={pinkm} alt="" />

      </article>
      <article className={`alla ${getActiveClassName(activeArticle, '3rd Article')}`} >
        <h1>hejsan</h1>
        <p className='c'> Jag skulle vilja ha ett rosa tema i nästa uppgift.</p>
        <img className='pinkr' src={pinkr} alt="" />
      </article>
      <div className='article'>
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