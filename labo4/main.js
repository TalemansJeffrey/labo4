import './style.css';
import * as THREE from 'three';
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


//fontloader

//get font 

//import gltf loader
//three klasse is enkel voor de basis dingen te kunnen doen
//De andere dingen zijn in de examples, ze zitten niet in de basis van three.js

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

const textureLoader = new THREE.TextureLoader();

//add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

//add directional light

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(3, 10, 2);
scene.add(directionalLight);






// Create a cube
//begin met geometry, material en mesh
//in three js werk je met de unit meter 1 = 1 meter

//add een sphere rond alles
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(100, 100, 32),
  new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0,
    metalness: 0,
    transmission: 0.5, //transparantie

    //thickness

    //add color to inside 

    side: THREE.BackSide
  })

);
sphere.position.set(0, 0, 0);
scene.add(sphere);

const bgTexture = new THREE.TextureLoader().load('/spotted-glass-texture.jpg');
const bgGeometry = new THREE.SphereGeometry(100, 100, 32);
const bgMaterial = new THREE.MeshBasicMaterial({
  map: bgTexture,
  side: THREE.DoubleSide
});
const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
bgMesh.position.set(0, 0, 0);

scene.add(bgMesh);


const geometry = new THREE.PlaneGeometry(30, 10);
const material = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});
const roofMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});
const doorMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});
const chimneyMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.FrontSide
});
const grassMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});

//change the position of the cube

//add the ground/terrain
const groundGeometry = new THREE.PlaneGeometry(100, 100, 32);
const grassTexture = new THREE.TextureLoader().load('/piece-turf.jpg');
grassMaterial.map = grassTexture;
//const groundMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, side: THREE.DoubleSide});

const ground = new THREE.Mesh(groundGeometry, grassMaterial);

ground.rotation.x = Math.PI / 2;

ground.position.set(0, -5, 0);
scene.add(ground);


//backwall
const wall1 = new THREE.Mesh(geometry, material);
wall1.position.set(0, 0, -3.5);
scene.add(wall1);


//left wall
//texture plane on outside

const textureBrick = textureLoader.load('/brick.jpg');
material.map = textureBrick;

const measureMentWall2 = new THREE.PlaneGeometry(17, 10);

const wall2 = new THREE.Mesh(measureMentWall2, material);
wall2.position.set(-15, 0, 5);
wall2.rotation.y = Math.PI / 2;
scene.add(wall2);

//right wall
const measureMentWall3 = new THREE.PlaneGeometry(17, 10);
const wall3 = new THREE.Mesh(measureMentWall3, material);
wall3.position.set(15, 0, 5);
wall3.rotation.y = Math.PI / 2;
scene.add(wall3);

//front wall
const measureMentWall4 = new THREE.PlaneGeometry(30, 10);
const wall4 = new THREE.Mesh(measureMentWall4, material);
wall4.position.set(0, 0, 13.5);
scene.add(wall4);

//add floor
const measureMentFloor = new THREE.PlaneGeometry(30, 17);
const floor = new THREE.Mesh(measureMentFloor, material);
floor.position.set(0, -5, 5);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

const roofTexture = textureLoader.load('/roof.jpg');
roofMaterial.map = roofTexture;
//add a roof
const measureMentRoof = new THREE.PlaneGeometry(30, 10);
const roof = new THREE.Mesh(measureMentRoof, roofMaterial);
roof.position.set(0, 7.4, 0.65);
//the roof is rotated 45 degrees
roof.rotation.x = Math.PI / 3;
scene.add(roof);


//second roof
const measureMentRoof2 = new THREE.PlaneGeometry(30, 10);
const roof2 = new THREE.Mesh(measureMentRoof2, roofMaterial);

//roof 2 on wall 4
roof2.position.set(0, 7.4, 9.35);
//the roof is rotated 60 degrees
roof2.rotation.x = Math.PI / -3;
scene.add(roof2);



//door
//add a door
const doorTexture = textureLoader.load('wood.jpg');
const measureMentDoor = new THREE.PlaneGeometry(3, 5);
const door = new THREE.Mesh(measureMentDoor, doorMaterial);
doorMaterial.map = doorTexture;





door.position.set(0, -2.4, -3.6);
scene.add(door);

//add a window
const window1 = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  new THREE.MeshLambertMaterial({
    color: 0x0000ff,
    side: THREE.DoubleSide
  })
);
window1.position.set(0, -2.5, -3.7);
scene.add(window1);

//window 2

const window2 = new THREE.Mesh(

  new THREE.PlaneGeometry(5, 3),
  new THREE.MeshLambertMaterial({
    color: 0x0000ff,
    side: THREE.DoubleSide
  }));
window2.position.set(8, 0, -3.7);
scene.add(window2);

//schoorsteen
const chimneyTexture = textureLoader.load('brick.jpg');
const chimneyMeasurement = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const chimney = new THREE.Mesh(chimneyMeasurement, chimneyMaterial);
chimneyMaterial.map = chimneyTexture;



chimney.position.set(0, 8, 10);
scene.add(chimney);


camera.position.set(0,0,-30);
camera.rotation.y = Math.PI;
//camera helper
;



//voeg een houten bord toe
const woodTexture = textureLoader.load('wood.jpg');
//change thickness of the plane

const woodMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});
woodMaterial.map = woodTexture;
const woodMeasurement = new THREE.BoxGeometry(5, 6, 0.1);
const wood = new THREE.Mesh(woodMeasurement, woodMaterial);
wood.position.set(-6, 0, -10);
scene.add(wood);

//ondersteuningsbalk voor het houten bord
const woodSupportTexture = textureLoader.load('wood.jpg');
const woodSupportMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});
woodSupportMaterial.map = woodSupportTexture;
const woodSupportMeasurement = new THREE.BoxGeometry(0.5, 4, 0.1);
const woodSupport = new THREE.Mesh(woodSupportMeasurement, woodSupportMaterial);
woodSupport.position.set(-6, -4, -10);
scene.add(woodSupport);

//voeg een foto toe aan het houten bord
const photoTexture = textureLoader.load('ikkke.webp');
const photoMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide
});
photoMaterial.map = photoTexture;
const photoMeasurement = new THREE.PlaneGeometry(3, 3);
const photo = new THREE.Mesh(photoMeasurement, photoMaterial);
photo.position.set(-6, 1, -10.1);
scene.add(photo);

//voeg een tekst toe aan het houten bord

const textTexture = textureLoader.load('JeffreyTalemansText.png');
const textMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.FrontSide
});
textMaterial.map = textTexture;
const textMeasurement = new THREE.PlaneGeometry(3, 1);
const text = new THREE.Mesh(textMeasurement, textMaterial);
text.position.set(-6, -2, -10.1);
//mirror the text
text.rotation.y = Math.PI;

scene.add(text);
//add a dog
let dog;
const gltfLoader = new GLTFLoader();
gltfLoader.load('/shiba/scene.gltf', (gltf) => {


  //add the texture to the dog
  const dogTexture = textureLoader.load('/shiba/textures/lambert1_diffuse.png');
  const dogMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
  });
  dogMaterial.map = dogTexture;

  dog = gltf.scene.children[0];
  dog.scale.set(0.2, 0.2, 0.2);
  dog.position.set(0, -5, -12);
  //rotate the dog 180 degrees
  dog.rotation.z = Math.PI;
  scene.add(dog);
});

//add a person
let person;
const gltfLoader2 = new GLTFLoader();
gltfLoader2.load('/man/scene.gltf', (gltf) => {
  person = gltf.scene.children[0];

  person.scale.set(0.02, 0.02, 0.02);
  person.position.set(0, -5, -8);
  //rotate the person 180 degrees
  person.rotation.z = Math.PI;
  scene.add(person);

});








  




//add clouds


const addCloud = (x,y,z) => {
  let cloud;
  const gltfLoader = new GLTFLoader();
  gltfLoader.load('/clouds/scene.gltf', (gltf) => {
    cloud = gltf.scene;
    cloud.scale.set(0.1, 0.1, 0.1);
    cloud.position.set(x,y,z);
    scene.add(cloud);
  }
  );
 




}
for(let i = 0; i < 5; i++){

  //random waarde tussen 0 en 1
  //afstand van 100 pixels tussen de wolken
  //Math.random geeft een waarde tussen 0 en 1
  //Math.random() * 100 geeft een waarde tussen 0 en 100
  //math random() - 0.5 * 100 geeft een waarde tussen -50 en 50
  const x = (Math.random() - 0.5) * 100;
  //de y as is vast
  const y = 40;
  const z = (Math.random() - 0.5) * 100;
  addCloud(x,y,z);



  


  





}







function animate() {
  requestAnimationFrame(animate);

  //rotate the dog
  
  if(dog){




    //the dog does the animation every 10 seconds

    if (dog.position.x >= 2){

      //dog turns 180 degrees
      dog.rotation.z = Math.PI;
      dog.position.x -= 0.03;
      //console.log(z);


    }
    
    else {
      dog.position.x += 0.01;

    }





  }
      //camera goes closer to door
     camera.position.z = camera.position.z + 0.01;

     if (camera.position.z >= 10){

      camera.position.z --;



     }

     //select 






  
  




  





 
  






    

   


  renderer.render(scene, camera);
};

animate();


//select the music you want to play
const music = document.querySelector('.audio');
//select the button
const button = document.querySelector('.playInstrumental');
const sing = document.querySelector('.playSinging');

//change the URL of the audio when pressing the button
button.addEventListener('click', () => {
  music.src = 'audio.mp3';
  music.play();
}
);

sing.addEventListener('click', () => {
  music.src = 'singing.mp3';

  music.play();


}
);


