import "./cardboard.css"
import Card from "./Card";

export default function CardBoard() {
    const symbols = [
        "👩‍💻",
        "👩‍💻",
        "🎂",
        "🎂",
        "💝",
        "💝",
        "💤",
        "💤",
        "🧶",
        "🧶",
        "🥸",
        "🥸",
        "🦀",
        "🦀",
        "🐸",
        "🐸",
    ]
    return (
        <div className='card-board'>
            {symbols.map((symbol, index) =>
                <Card
                    key={`card-${index}`} symbol={symbol}
                    isFaceUp={false}
                />
            )}
        </div>
    )
}
