export const useExpandNumber = () => {
    const getExpandedNumber = (number) => {
        const numbersArr = number.toString().split('');
        const countDigits = numbersArr.length;
        const expandedNumberArr = [];

        for (let i = countDigits; i > 0; i--) {
            const currentNumber = Number(numbersArr[countDigits - i]);

            if (currentNumber > 0) {
                expandedNumberArr.push(currentNumber * 10 ** (i - 1));
            }
        }

        return expandedNumberArr.join(' + ');
    }

    return {
        getExpandedNumber,
    }
};
