import { toClasslist } from "../lib/helpers"
import "./card.css"

type CardProps = {
    symbol: string,
    isMatched: boolean,
    isFaceUp: boolean,
    onClick: () => void,
    locked: boolean
}

export default function Card({ symbol, isFaceUp, onClick, locked, isMatched }: CardProps) {
    const flippedClass = isFaceUp ? "face-up-card" : "face-down-card"
    const isMatchedClass = isMatched ? "card-matched" : ""

    return (
        <button
            className={toClasslist([
                "card",
                flippedClass,
                isMatchedClass
            ])}
            onClick={(event) => {
                event.stopPropagation()
                onClick()
            }}
            disabled={isMatched || locked}
        >
            <p>{(isFaceUp || isMatched) ? symbol : ""}</p>
        </button>
    )
}
