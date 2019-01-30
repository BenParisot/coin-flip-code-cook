const test = QUnit.test;

function catOrDog(randomNumber) {
    let result = '';

    if(randomNumber < 0.5) {
        result = 'cat';
    }
    else {
        result = 'dog';
    }
    return result;
}


test('return cat if random number is less than 0.5', function(assert) {
    const randomNumber = 0.4;
    const result = catOrDog(randomNumber);
    const expected = 'cat';

    assert.equal(result, expected);
});

test('return dog if random number is equal to or more than 0.5', function(assert) {
    const randomNumber = 0.5;
    const result = catOrDog(randomNumber);
    const expected = 'dog';

    assert.equal(result, expected);
});