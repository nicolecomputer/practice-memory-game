export type CardId = string;

export type Card = {
    id: CardId,
    symbol: string
}

export function isMatch(allCards: Card[], flippedCardIds: CardId[]): boolean {
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
