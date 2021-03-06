// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker{
    constructor(attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
    };
    cuboid_volume(){
    return this.height * this.length * this.width
    };
    surface_area(){
    return 2 * (this.length * this.width + this.height * this.length + this.width * this.height) 
    }
  };
 
class CubeMaker extends CuboidMaker{
    constructor(attributes){
      super(attributes);
    }
    cube_volume(){
      return 3 * this.width
    }
    cube_surfaceArea(){
      return 6 * this.width
    }
  }
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  })

  const cube = new CubeMaker({
    width: 6
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.cuboid_volume()); // 100
  console.log(cuboid.surface_area()); // 130
  
  console.log(cube.cube_volume())
  console.log(cube.cube_surfaceArea());
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.