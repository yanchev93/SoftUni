let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        };

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i]);
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05);
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
};

const assert = require('chai').assert;

describe('Tests', () => {
    it('newCarCost', () => {
        assert.equal(dealership.newCarCost('Trabant', 1000), 1000);
        assert.equal(dealership.newCarCost('Audi A4 B8', 20000), 5000);
        assert.equal(dealership.newCarCost('Audi A4 B8', 15000), 0);
        assert.equal(dealership.newCarCost('Audi A4 B8', 10000), -5000);
    });

    it('carEquipment', () => {
        assert.deepEqual(dealership.carEquipment(['music'], [0]), ['music']);
        assert.deepEqual(dealership.carEquipment(['music', 'lights', 'rims'], [0, 2]), ['music', 'rims']);
    });

    it('euroCategory', () => {
        assert.equal(dealership.euroCategory(1), 'Your euro category is low, so there is no discount from the final price!');
        assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`);
        assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`);
    });
});