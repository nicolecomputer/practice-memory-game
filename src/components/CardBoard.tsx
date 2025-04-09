import "./cardboard.css"
import React from "react";
import { CardId, Card, isMatch } from "../lib/match-game";
import { default as CardComponent } from "./Card";

type CardBoardProps = {
    cards: Card[],
    matchedCardIds: CardId[],
    onMatch: (cardIds: CardId[]) => void
}
export default function CardBoard({ cards, onMatch, matchedCardIds }: CardBoardProps) {
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
                <CardComponent
                    key={`card-${card.id}`}
                    symbol={card.symbol}
                    isMatched={matchedCardIds.includes(card.id)}
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
                            setFlippedCardIds(nextFlippedCards)
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
