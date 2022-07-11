//https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

export default function maximumNumber(prices: number[], k: number) {
    const sortedPrices = prices.sort((a: number, b: number) => a - b)
    console.log(sortedPrices)
}