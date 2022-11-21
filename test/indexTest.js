const fs = require('fs')
const path = require('path')

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      let companyName = 'Scuber';
    });

    it('is defined as a const', function () {
      const companyName = 'Scuber';
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
     let mostProfitableNeighborhood ='Chelsea' ;
    });

    it('is defined using let', function () {
      let Chelsea ='Chelsea';
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      let companyCeo = 'Susan Smith';
    });

    it('is defined using let', function () {
      let companyCeo;
    });
  });
});
