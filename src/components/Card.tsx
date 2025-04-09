import { toClasslist } from "../lib/helpers"
import "./card.css"

type CardProps = {
    symbol: string,
    isFaceUp: boolean
}

export default function Card({ symbol, isFaceUp }: CardProps) {
    const flippedClass = isFaceUp ? "face-up-card" : "face-down-card"

    return (
        <button className={toClasslist([
            "card",
            flippedClass
        ])}>
            <p>{isFaceUp ? symbol : ""}</p>
        </button>
    )
}
