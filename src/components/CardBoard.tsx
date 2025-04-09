import "./cardboard.css"
import Card from "./Card";
import React from "react";

type CardId = string;

type Card = {
    id: CardId,
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

    const [flippedCardIds, setFlippedCardIds] = React.useState<CardId[]>([])
    const [boardLocked, setBoardLocked] = React.useState(false)

    React.useEffect(() => {
        let timeout: number;

        if (boardLocked) {
            timeout = setTimeout((() => {
                setFlippedCardIds([])
                setBoardLocked(false)
            }), 800)
        }

        return () => clearTimeout(timeout)
    }, [boardLocked])

    return (
        <div className='card-board'>
            {symbols.map((card) =>
                <Card
                    key={`card-${card.id}`}
                    symbol={card.symbol}
                    isFaceUp={flippedCardIds.includes(card.id)}
                    locked={boardLocked}
                    onClick={() => {
                        const nextFlippedCards = [
                            ...flippedCardIds,
                            card.id
                        ]

                        if (nextFlippedCards.length == 2) {
                            setBoardLocked(true)
                        }

                        setFlippedCardIds(nextFlippedCards)
                    }}
                />
            )}
        </div>
    )
}
