const getSmallCount = (count, symbol = '') => {
    const getNumber = (a, b, index) => {
        return `${symbol}${Math.floor(count / a)}.${Math.floor(count % a / b)}${index}`
    }

    if (count > 999 && count < 1_000_000) {
        return getNumber(1000, 10, 'k');
    } else if (count > 999_999 && count < 1_000_000_000) {
        return getNumber(1_000_000, 1_000, 'm');
    } else if (count > 999_999_999 && count < 1_000_000_000_000) {
        return getNumber(1_000_000_000, 1_000_000, 'b');
    } else {
        return symbol + count;
    }
}

export default getSmallCount;