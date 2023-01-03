const MathUtils = {

    addition: (...numbers) => {
        if (numbers.length === 0) {
            throw new Error('Necessite un parametre');
        }
        if (numbers.find(number => typeof (number) !== 'number') !== undefined) {
            throw new Error('Necessite des parametres de type "number"');
        }

        // Classique
        let sum = 0;
        numbers.forEach((number) => {
            sum += number;
        })
        return sum;

        // Avec Reduce
        return numbers.reduce((acc, curent) => acc + curent, 0);
    },

    substract: (number1, number2) => {
        if (number1 === undefined || number2 === undefined) {
            throw new Error('Necessite uniquement deux parametres !');
        }
        if (typeof (number1) !== 'number' || typeof (number2) !== 'number') {
            throw new Error('Necessite des parametres de type "number"');
        }

        return number1 - number2
    }
};

module.exports = MathUtils;