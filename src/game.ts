
const Grounds = new Entity('Grounds')
// add a transform to the entity
Grounds.addComponent(new Transform({ position: new Vector3(16, -.5, 8), scale: new Vector3(.5, .5, .5), rotation: Quaternion.Euler(0, 0, 0) }))

// add a shape to the entity
//cube.addComponent(new BoxShape())

//const tower = new GLTFShape("models/centerCastle.gtlf")
Grounds.addComponent(new GLTFShape('models/CastleGrounds.glb'))
// add the entity to the engine
engine.addEntity(Grounds)

const RocksTrees = new Entity('RocksTrees')
// add a transform to the entity
RocksTrees.addComponent(new Transform({ position: new Vector3(17, -1, 8), scale: new Vector3(.4, .5, .4), rotation: Quaternion.Euler(0, 0, 0) }))

// add a shape to the entity
//cube.addComponent(new BoxShape())

//const tower = new GLTFShape("models/centerCastle.gtlf")
RocksTrees.addComponent(new GLTFShape('models/CastleGrounds2.glb'))
// add the entity to the engine
engine.addEntity(RocksTrees)





function spawnGrass(shape: Shape, x: number, y: number, z: number) {
    // create the entity
    const grass = new Entity()

    // add a transform to the entity
    grass.addComponent(
        new Transform({
            position: new Vector3(x, y, z),
            rotation: Quaternion.Euler(0, Math.random() * 30, 0),
            scale: new Vector3(1, 0.5 + Math.random() / 2, 1),
        })
    )

    // add a shape to the entity
    grass.addComponent(shape)

    //grass.addComponent(new WaveGrass())

    let col = new Material()
    col.albedoColor = new Color3(x / 16, y / 16, z / 4)
    grass.addComponent(col)

    engine.addEntity(grass)

    return grass
}


/// --- Spawn grass blades ---

let grassShape = new GLTFShape('models/grass.glb')
let grass2Shape = new GLTFShape('models/grass2.glb')
let grass3Shape = new GLTFShape('models/grass3.glb')

//Main strip

for (var x = 1.5; x < 22; x++) {
    for (var y = 1.5; y < 15; y++) {
        // select a glb mesh randomly from the 3 variations
        let selector = Math.random()

        if (selector > 0.66) {
            spawnGrass(grassShape, x, -.5, y)
        } else if (selector > 0.33) {
            spawnGrass(grass2Shape, x, -.3, y)
        } else {
            spawnGrass(grass3Shape, x, .1, y)
        }
    }
}