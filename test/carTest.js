const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const shouldBuyCar = require('../shouldBuyCar');

function assertCarShouldGetBought(input){
  assert.isTrue(input);
}

function assertCarShouldNotGetBought(input){
  assert.isFalse(input);
}

describe('buy car', function(){

  context('with no car or no properties', function() {
    it('should throw an error when there is no car', function(){
      const car = "";

      expect(function() {shouldBuyCar(car);}).to.throw('Error');
    })

    it('should return false when there are no details about the car', function(){
      const car = {};

      assertCarShouldNotGetBought(shouldBuyCar(car));
    })
  })

  context('with color and/or type', function(){
    it('should return true when the car is pink', function(){
      const car = {
        colour: 'pink'
      }

      assertCarShouldGetBought(shouldBuyCar(car));
    })

    it('should return false when the car is a hatchback', function(){
      const car = {
        type: 'hatchback'
      }

      assertCarShouldNotGetBought(shouldBuyCar(car));
    })

    it('should return false when the car is a hatchback and pink', function(){
      const car = {
        colour: 'pink',
        type: 'hatchback'
      }

      assertCarShouldNotGetBought(shouldBuyCar(car));
    })
  })

  context('with consumption and price', function() {
    it('should return true when the car has 6 litres/100km and is under or equal to $5,000', function(){
      const car = {
        consumption: 6,
        price: 5000
      }

      assertCarShouldGetBought(shouldBuyCar(car));
    })

    it('should return true when the car has 11 litres/100km and is under or equal to $5,000', function(){
      const car = {
        consumption: 11,
        price: 5000
      }

      assertCarShouldGetBought(shouldBuyCar(car));
    })

    it('should return false when the car has 6 litres/100km and is over $5,000', function(){
      const car = {
        consumption: 6,
        price: 5001
      }

      assertCarShouldNotGetBought(shouldBuyCar(car));
    })

    it('should return false when the car has 11 litres/100km and is over $5,000', function(){
      const car = {
        consumption: 11,
        price: 5001
      }

      assertCarShouldNotGetBought(shouldBuyCar(car));
    })

    it('should return false when the car has 5 litres/100km and is under or equal to $5,000', function(){
      const car = {
        consumption: 5,
        price: 5000
      }

      assertCarShouldNotGetBought(shouldBuyCar(car));
    })

    it('should return false when the car has 12 litres/100km and is under or equal to $5,000', function(){
      const car = {
        consumption: 12,
        price: 5000
      }

      assertCarShouldNotGetBought(shouldBuyCar(car));
    })
  })
})