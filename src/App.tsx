import React from 'react'
import './App.css'
import CardBoard from './components/CardBoard'
import { Card, CardId, shuffle } from './lib/match-game'

type GameState = "playing" | "won"

function App() {
  const [cards] = React.useState<Card[]>(shuffle([
    { symbol: "👩‍💻", id: "1" },
    { symbol: "👩‍💻", id: "2" },
    { symbol: "🎂", id: "3" },
    { symbol: "🎂", id: "4" },
    { symbol: "💝", id: "5" },
    { symbol: "💝", id: "6" },
    { symbol: "💤", id: "7" },
    { symbol: "💤", id: "8" },
    { symbol: "🧶", id: "9" },
    { symbol: "🧶", id: "10" },
    { symbol: "🥸", id: "11" },
    { symbol: "🥸", id: "12" },
    { symbol: "🦀", id: "13" },
    { symbol: "🦀", id: "14" },
    { symbol: "🐸", id: "15" },
    { symbol: "🐸", id: "16" },
  ]))
  const [matchedCardIds, setMatchedCardIds] = React.useState<CardId[]>([])
  const [gameState, setGameState] = React.useState<GameState>("playing")
  return (
    <>
      <h1>Memory Game</h1>
      <div className='game-board-container'>
        <CardBoard
          matchedCardIds={matchedCardIds}
          cards={cards}
          onMatch={(cardIds) => {
            const nextMatches = [
              ...matchedCardIds,
              ...cardIds
            ]
            setMatchedCardIds(nextMatches)
            if (nextMatches.length === cards.length) {
              setGameState("won")
            }
          }}
        />
        {gameState === "won" && <div className='win-overlay'>
          <h2>You win!</h2>
        </div>}
      </div>
    </>
  )
}

export default App
