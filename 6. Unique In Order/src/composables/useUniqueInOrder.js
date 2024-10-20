export const useUniqueInOrder = () => {
    const getUniqueInOrder = (iterable) => {
        const resultArr = [];

        for (let i = 0; i < iterable.length; i++) {
            if (resultArr[resultArr.length - 1] !== iterable[i]) {
                resultArr.push(iterable[i]);
            }
        }

        return resultArr;
    }

    return {
        getUniqueInOrder,
    }
};
