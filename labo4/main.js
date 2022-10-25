import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import gltf loader
//three klasse is enkel voor de basis dingen te kunnen doen
//De andere dingen zijn in de examples, ze zitten niet in de basis van three.js

const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
  
      //add orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);

     const textureLoader = new THREE.TextureLoader();

      //add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      //add directional light

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(3, 3, 2);
      scene.add(directionalLight);

    


      //add directional light helper
      /*const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
      scene.add(directionalLightHelper);
*/
      // Create a cube
      //begin met geometry, material en mesh
      //in three js werk je met de unit meter 1 = 1 meter
      
      //add een sphere rond alles
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(100, 100, 32),
        new THREE.MeshStandardMaterial({
          color: 0x00ff00,
          //add color to inside 
          side: THREE.BackSide
        })

      );
      sphere.position.set(0, 0, 0);
      scene.add(sphere);


			const geometry = new THREE.PlaneGeometry( 30, 10);
			const material = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide} );
      const roofMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
      const doorMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
            //change the position of the cube

          //backwall 
			const wall1 = new THREE.Mesh( geometry, material );
            wall1.position.set(0, 0, -3.5);
            scene.add( wall1 );


          //left wall
          //texture plane on outside

          const textureBrick = textureLoader.load('/brick.jpg');
          material.map = textureBrick;

          const measureMentWall2 = new THREE.PlaneGeometry(17, 10);
          
          const wall2 = new THREE.Mesh( measureMentWall2, material );
          wall2.position.set(-15, 0, 5);
          wall2.rotation.y = Math.PI / 2;
          scene.add( wall2 );

          //right wall
          const measureMentWall3 = new THREE.PlaneGeometry(17, 10);
          const wall3 = new THREE.Mesh( measureMentWall3, material );
          wall3.position.set(15, 0, 5);
          wall3.rotation.y = Math.PI / 2;
          scene.add( wall3 );

          //front wall
          const measureMentWall4 = new THREE.PlaneGeometry(30, 10);
          const wall4 = new THREE.Mesh( measureMentWall4, material );
          wall4.position.set(0, 0, 13.5);
          scene.add( wall4 );

          //add floor
          const measureMentFloor = new THREE.PlaneGeometry(30, 17);
          const floor = new THREE.Mesh( measureMentFloor, material );
          floor.position.set(0, -5, 5);
          floor.rotation.x = Math.PI / 2;
          scene.add( floor );

          const roofTexture = textureLoader.load('/roof.jpg');
          roofMaterial.map = roofTexture;
          //add a roof
          const measureMentRoof = new THREE.PlaneGeometry(30, 10);
          const roof = new THREE.Mesh( measureMentRoof, roofMaterial);
          roof.position.set(0,7.4, 0.65);
          //the roof is rotated 45 degrees
          roof.rotation.x = Math.PI / 3;
          scene.add( roof );

         
          //second roof
          const measureMentRoof2 = new THREE.PlaneGeometry(30, 10);
          const roof2 = new THREE.Mesh( measureMentRoof2, roofMaterial);

          //roof 2 on wall 4
          roof2.position.set(0, 7.4,  9.35);
          //the roof is rotated 60 degrees
          roof2.rotation.x = Math.PI / -3;
          scene.add( roof2 );
          
     

        //door
        //add a door
        const doorTexture = textureLoader.load('wood.jpg');
        const measureMentDoor = new THREE.PlaneGeometry(3, 5);
        const door = new THREE.Mesh( measureMentDoor, doorMaterial);
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


  
  
            
      //je moet het allemaal an je scene toevoegen
      //camera positie
      //position x = links of rechts
      //position y = hoogte
      //position z = voor of achter
			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );


        /*camera.position.x += 0.01;
        camera.position.y += 0.01;*/
        //Hier kijk je de hele tijd naar de cubus ook wanneer je verder en verder weg beweegt
        camera.lookAt(wall1.position);

       // cube.position.x += 0.01;

       //earth.rotation.y += 0.005;
        

				renderer.render( scene, camera );
			};

			animate();


     
        //change color of cube
        


      
    
      