import "./card.css"

type CardProps = {
    symbol: string
}

export default function Card({ symbol }: CardProps) {
    return (
        <button className="card">
            <p>{symbol}</p>
        </button>
    )
}
