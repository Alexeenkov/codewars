export const useWhatCentury = () => {
    const getWhatCentury = (year) => {
        const century = (Math.floor(year / 100)) + 1;

        if (year % 1000 === 0) {
            return `${Math.floor(year / 100)}th`;
        }

        if (century > 3 && century < 21) {
            return `${century}th`;
        }

        switch (century % 10) {
            case 1:
                return `${century}st`;
            case 2:
                return `${century}nd`;
            case 3:
                return `${century}rd`;
            default:
                return `${century}th`;
        }
    }

    return {
        getWhatCentury,
    }
};
