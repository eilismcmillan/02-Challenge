
class Logo {}

Logo.prototype.createLogo = (data) => {
      const logoText = data.logoText;
      const textColor = data.textColor;
      const shape = data.shape;
      const shapeColor = data.shapeColor;
      let logoSVG = "";

      if (shape === "circle") {
        return (logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
      
        <text x="150" y="120" font-size="50" text-anchor="middle" fill="${textColor}">${logoText}</text>
      
      </svg>`);
      } else if (shape === "triangle") {
        return (logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
  
    <text x="150" y="150" font-size="50" text-anchor="middle" fill="${textColor}">${logoText}</text>
     </svg>`);
      } else if (shape === "square") {
        return (logoSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect x="75" y="35" width="150" height="150" fill="${shapeColor}" />
  
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${textColor}">${logoText}</text>
     </svg>`);
      }
    };

module.exports = Logo;

