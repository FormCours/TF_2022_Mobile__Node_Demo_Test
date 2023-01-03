const MathUtils = require('../modules/math-utils');

const assert = require('assert');

const chai = require('chai');
chai.should();

describe('Math Utils', function () {
    // ↓ Utilisation de l'object "assert" pour les testes
    describe('Addition', function () {
        it('Two numbers', function () {
            const result = MathUtils.addition(1, 2);
            const exceptResult = 3;

            assert.equal(result, exceptResult);
            assert.equal(typeof (result), 'number');
        });

        it('Three numbers', function () {
            const result = MathUtils.addition(1, 2, 3);
            const exceptResult = 6;

            assert.equal(result, exceptResult);
            assert.equal(typeof (result), 'number');
        });

        it('Only one parametre', function () {
            const result = MathUtils.addition(42);

            assert.equal(result, 42);
            assert.equal(typeof (result), 'number');
        });

        it('No parameter', function () {
            assert.throws(() => {
                // Code a risque ici !
                const result = MathUtils.addition();

            }, new Error('Necessite un parametre'));
        });

        it('Parametre type string', function () {
            assert.throws(() => {
                const result = MathUtils.addition('40', 2);
            }, /Error: Necessite des parametres de type "number"/i);
        });
    });

    // ↓ Utilisation de la librairie "chai" pour les testes
    describe('Subtract', function () {
        it('Two numbers', function () {
            const result = MathUtils.substract(50, 8);

            result.should.equal(42);
            result.should.be.a('number');
        });

        it('Missing parameter', function () {
            const badFn = () => {
                MathUtils.substract(10);
            };
            chai.expect(badFn).to.throw(Error, 'Necessite uniquement deux parametres !');
        });

        it('Parameter type string', function () {
            const badFn = () => {
                MathUtils.substract(4, '5');
            };
            chai.expect(badFn).to.throw('Necessite des parametres de type "number"');
        });

        it('Parameter value 0', function () {
            const result1 = MathUtils.substract(42, 0);
            const result2 = MathUtils.substract(0, 5);

            result1.should.equal(42);
            result2.should.equal(-5);
            result1.should.be.a('number');
            result2.should.be.a('number');
        });
    });
});