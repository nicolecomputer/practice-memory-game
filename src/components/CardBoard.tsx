import "./cardboard.css"
import Card from "./Card";
import React from "react";

type CardId = string;

type Card = {
    id: CardId,
    symbol: string
}

function isMatch(allCards: Card[], flippedCardIds: CardId[]): boolean {
    const cards = allCards
        .filter(card => flippedCardIds.includes(card.id))
        .map(card => card.symbol)

    const targetSymbol = cards[0]

    for (const card of cards) {
        if (card !== targetSymbol) {
            return false
        }
    }

    return true
}

type CardBoardProps = {
    cards: Card[]
    onMatch: (cardIds: CardId[]) => void
}
export default function CardBoard({ cards, onMatch }: CardBoardProps) {
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
            {cards.map((card) =>
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

                        if (nextFlippedCards.length == 2 && isMatch(cards, nextFlippedCards)) {
                            onMatch(nextFlippedCards)
                            setFlippedCardIds([])
                        } else if (nextFlippedCards.length == 2) {
                            setBoardLocked(true)
                        } else {
                            setFlippedCardIds(nextFlippedCards)
                        }

                    }}
                />
            )}
        </div>
    )
}
