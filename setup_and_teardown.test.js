// beforeEach(() => {
//     initializeCityDatabase();
// })

// afterEach(() => {
//     clearCityDatabase();
// })

// test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
// })

// test('city database has San Juan', () => {
//     expect(isCity('San Juan')),toBeTruthy();
// })


// beforeAll(() => {
//     return initializeCityDatabase()
// })

// afterAll(() => {
//     return clearCityDatabase()
// })

// test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
// })

// test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy()
// })


// beforeEach(() => {
//     return initializeCityDatabase()
// })

// test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
// })

// test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
// })

// describe('matching cities to foods', () => {
//     beforeEach(() => {
//         return initializeFoodDatabase();
//     });

//     test('Vienna <3 veal', (() => {
//         expect(isValidCityFoodPair('Viennna', 'Wiener Schnitzel')).toBe(true)
//     }))

//     test('San Juan <3 plantains', (() => {
//         expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true)
//     }))
// })



// 各フックの順番の確認, スコープ違いによる挙動の違い
// beforeAll(() => console.log('1 - beforeAll'))
// afterAll(() => console.log('1 - afterAll'))
// beforeEach(() => console.log('1 - beforeEach'))
// afterEach(() => console.log('1 - afterEach'))

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//     beforeAll(() => console.log('2 - beforeAll'))
//     afterAll(() => console.log('2 - afterAll'))
//     beforeEach(() => console.log('2 - beforeEach'))
//     afterEach(() => console.log('2 - afterEach'))
    
//     test('', () => console.log('2 - test'))
// })


// describe('desvribe outer', () => {
//     console.log('describe outer-a')

//     describe('describe inner 1', () => {
//         console.log('describe inner 1')
//         test('test 1', () => console.log('test 1'))
//     })

//     console.log('describe outer-b')
//     test('test 2', () => console.log('test 2'))

//     describe('describe inner 2', () => {
//         console.log('describe inner 2')
//         test('test 3', () => console.log('test 3'))
//     })

//     console.log('describe outer-c')
// })


beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => { 
  beforeEach(() => console.log('extra database setup'));
  afterEach(() => console.log('extra database teardown'));

  test('test 2', () => console.log('test 2'));
});

