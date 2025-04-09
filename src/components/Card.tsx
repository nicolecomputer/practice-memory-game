import { toClasslist } from "../lib/helpers"
import "./card.css"

type CardProps = {
    symbol: string,
    isFaceUp: boolean,
    onClick: () => void
}

export default function Card({ symbol, isFaceUp, onClick }: CardProps) {
    const flippedClass = isFaceUp ? "face-up-card" : "face-down-card"

    return (
        <button
            className={toClasslist([
                "card",
                flippedClass
            ])}
            onClick={(event) => {
                event.stopPropagation()
                onClick()
            }}
        >
            <p>{isFaceUp ? symbol : ""}</p>
        </button>
    )
}
