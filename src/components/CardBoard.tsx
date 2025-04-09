import "./cardboard.css"
import Card from "./Card";
import React from "react";

type Card = {
    id: string,
    symbol: string
}

export default function CardBoard() {
    const symbols: Card[] = [
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
    ]

    const [flippedCardId, setFlippedCardId] = React.useState<string | null>(null)

    return (
        <div className='card-board'>
            {symbols.map((card) =>
                <Card
                    key={`card-${card.id}`}
                    symbol={card.symbol}
                    isFaceUp={flippedCardId === card.id}
                    onClick={() => {
                        setFlippedCardId(card.id)
                    }}
                />
            )}
        </div>
    )
}
