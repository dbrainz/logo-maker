const {Circle, Triangle, Square} = require("../lib/shapes")

describe("Circle", () =>{
    describe("render", ()=> {
        it("Should take a color and return the svg string for that shape and color", () => {
            const shape = new Circle("blue")
            const expectedReturn = '<circle cx="150" cy="100" r="80" fill="blue" />'
            expect(shape.render()).toEqual(expectedReturn)
        })
    })
})

describe("Square", () =>{
    describe("render", ()=> {
        it("Should take a color and return the svg string for that shape and color", () => {
            const shape = new Square("blue")
            const expectedReturn = '<rect x="90" y="40" width="120" height="120" fill="blue" />'
            expect(shape.render()).toEqual(expectedReturn)
        })
    })
})

describe("Triangle", () =>{
    describe("render", ()=> {
        it("Should take a color and return the svg string for that shape and color", () => {
            const shape = new Triangle("blue")
            const expectedReturn = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
            expect(shape.render()).toEqual(expectedReturn)
        })
    })
})