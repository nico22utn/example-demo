export function capitalize(word) {
    const lower = word.toLowerCase();
    const capitalizedWord = `${word.charAt(0).toUpperCase()}${lower.slice(1)}`;
    return capitalizedWord;
}