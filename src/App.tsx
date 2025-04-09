import './App.css'
import CardBoard from './components/CardBoard'

function App() {
  return (
    <>
      <h1>Memory Game</h1>
      <CardBoard cards={[
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
      ]} onMatch={(cardIds) => {
        alert(cardIds)
      }} />
    </>
  )
}

export default App
