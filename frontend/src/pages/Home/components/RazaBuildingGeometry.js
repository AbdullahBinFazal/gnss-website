import * as THREE from 'three';

/**
 * RazaBuildingGeometry - Extracted 3D geometry for IST Raza Block
 * Converted from AntiGravity's architectural visualization
 */

export const createRazaBuilding = () => {
  const group = new THREE.Group();
  group.name = 'RazaBuilding';

  // Base platform
  const baseGeometry = new THREE.BoxGeometry(45, 0.8, 28);
  const baseMaterial = new THREE.MeshStandardMaterial({
    color: 0xf5f5f5,
    metalness: 0.1,
    roughness: 0.6,
  });
  const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
  baseMesh.position.y = -0.5;
  baseMesh.castShadow = true;
  baseMesh.receiveShadow = true;
  group.add(baseMesh);

  // Main building structure - Left wing
  const leftWingGeometry = new THREE.BoxGeometry(20, 8, 12);
  const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0xe8e8e8,
    metalness: 0.05,
    roughness: 0.7,
  });
  const leftWing = new THREE.Mesh(leftWingGeometry, wallMaterial);
  leftWing.position.set(-10, 3.5, -5);
  leftWing.castShadow = true;
  leftWing.receiveShadow = true;
  group.add(leftWing);

  // Main building - Center section
  const centerGeometry = new THREE.BoxGeometry(25, 10, 14);
  const centerMesh = new THREE.Mesh(centerGeometry, wallMaterial);
  centerMesh.position.set(0, 4.5, 0);
  centerMesh.castShadow = true;
  centerMesh.receiveShadow = true;
  group.add(centerMesh);

  // Main building - Right wing
  const rightWingGeometry = new THREE.BoxGeometry(15, 7, 11);
  const rightWing = new THREE.Mesh(rightWingGeometry, wallMaterial);
  rightWing.position.set(12, 3, 4);
  rightWing.castShadow = true;
  rightWing.receiveShadow = true;
  group.add(rightWing);

  // Roof section - Center
  const roofGeometry = new THREE.BoxGeometry(25, 0.6, 14);
  const roofMaterial = new THREE.MeshStandardMaterial({
    color: 0x2c3e50,
    metalness: 0.3,
    roughness: 0.5,
  });
  const roof = new THREE.Mesh(roofGeometry, roofMaterial);
  roof.position.set(0, 10.3, 0);
  roof.castShadow = true;
  roof.receiveShadow = true;
  group.add(roof);

  // Building accent - Front entrance area
  const entranceGeometry = new THREE.BoxGeometry(8, 5, 2);
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: 0x3498db,
    metalness: 0.2,
    roughness: 0.5,
  });
  const entrance = new THREE.Mesh(entranceGeometry, accentMaterial);
  entrance.position.set(-2, 2, 7);
  entrance.castShadow = true;
  entrance.receiveShadow = true;
  group.add(entrance);

  // Windows pattern - Left side
  createWindowPattern(group, -12.5, 2, -6, 4, 5, 'left');
  
  // Windows pattern - Center
  createWindowPattern(group, 0, 2, 1, 6, 5, 'center');
  
  // Windows pattern - Right side
  createWindowPattern(group, 10, 2, 5, 3, 4, 'right');

  // Entrance door
  const doorGeometry = new THREE.BoxGeometry(2, 3.5, 0.3);
  const doorMaterial = new THREE.MeshStandardMaterial({
    color: 0x34495e,
    metalness: 0.4,
    roughness: 0.3,
  });
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  door.position.set(-2, 1.5, 7.1);
  door.castShadow = true;
  door.receiveShadow = true;
  group.add(door);

  return group;
};

/**
 * Create window pattern on building facades
 */
const createWindowPattern = (group, posX, posY, posZ, cols, rows, side) => {
  const windowSize = 0.8;
  const spacing = 1.2;
  const windowMaterial = new THREE.MeshStandardMaterial({
    color: 0x87ceeb,
    metalness: 0.8,
    roughness: 0.1,
    emissive: 0x4a9eff,
    emissiveIntensity: 0.3,
  });

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const windowGeometry = new THREE.BoxGeometry(windowSize, windowSize, 0.2);
      const window = new THREE.Mesh(windowGeometry, windowMaterial);
      
      const offsetX = (col - cols / 2) * spacing;
      const offsetY = (row - rows / 2) * spacing;
      
      window.position.set(posX + offsetX, posY + offsetY, posZ);
      window.castShadow = true;
      window.receiveShadow = true;
      group.add(window);
    }
  }
};

/**
 * Create ground/landscape around building
 */
export const createRazaLandscape = () => {
  const group = new THREE.Group();
  
  // Surrounding ground
  const groundGeometry = new THREE.PlaneGeometry(80, 60);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x90ee90,
    metalness: 0.0,
    roughness: 0.9,
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1;
  ground.receiveShadow = true;
  group.add(ground);

  return group;
};

export default { createRazaBuilding, createRazaLandscape };