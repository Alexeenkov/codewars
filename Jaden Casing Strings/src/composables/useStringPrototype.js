export const useStringPrototype = () => {
    String.prototype.toJadenCase = function () {
        const arrayOfWords = this.toLowerCase().split(' ');

        for (let i = 0; i < arrayOfWords.length; i++) {
            arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
        }

        return arrayOfWords.join(' ');
    };
};
