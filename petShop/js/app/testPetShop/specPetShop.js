describe('Pet shop', function () {
    let petShop;

    beforeEach(function () {
        petShop = new PetShop();
    });

    it('should be the length of animals', function () {
        expect(petShop.animals.length).toBe(10);
    });

    it('should be average sum of animals', function () {
        expect(petShop.countAverageSum()).toBe(85.5);
    });

    it('should be list of cats', function () {
        expect(petShop.createListOfCats().length).toBe(3);
    });

    it('should be list of expensive animals', function () {
        expect(petShop.createListOfExpensive().length).toBe(5);
    });

    it('should be list of animals which are white or fluffy enough', function () {
        expect(petShop.createListWhiteAndFluffy().length).toBe(8);
    });
});