export const useUrlParser = () => {
    const getDomainName = (url) => {
        return url
            .replace("https://", '')
            .replace("http://", '')
            .replace("www.", '')
            .split('.')[0];
    };

    return {
        getDomainName,
    }
};
