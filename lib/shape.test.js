const Logo = require("./shapes.js");

describe("Logo", () => {
  describe("Circle Logo Shape", () => {
    it("should return a circle logo with user choice of text and background color", () => {
      const logoShape = new Logo();
      const response = {
        logoText: "CDH",
        textColor: "blue",
        shape: "square",
        shapeColor: "red",
      };
      const result = logoShape.createLogo(response);

      expect(result)
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
            <circle cx="150" cy="100" r="80" fill="red" />
          
            <text x="150" y="125" font-size="50" text-anchor="middle" fill="blue">CDH</text>
             </svg>`);
    });
  });

  describe("Triangle Logo Shape", () => {
    it("should return a triangle logo with user choice of text and background color", () => {
      const logoShape = new Logo();
      const response = {
        logoText: "CDH",
        textColor: "blue",
        shape: "triangle",
        shapeColor: "red",
      };
      const result = logoShape.createLogo(response);

      expect(result)
        .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="red" />
      
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">CDH</text>
         </svg>`);
    });
  });

  describe("Square Logo Shape", () => {
    it("should return a square logo with user choice of text and background color", () => {
      const logoShape = new Logo();

      const response = {
        logoText: "CDH",
        textColor: "blue",
        shape: "square",
        shapeColor: "red",
      };
      const result = logoShape.createLogo(response);
      expect(result)
        .toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="75" y="35" width="150" height="150" fill="red" />
      
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="blue">CDH</text>
         </svg>`);
    });
  });
});
