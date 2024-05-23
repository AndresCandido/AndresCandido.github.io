let models = [
    '3D-models/Ant.glb',
    '3D-models/Black_Wyvern.glb',
    '3D-models/Fighter.glb'
    // Add more images as needed
];

let currentIndex = 0;

function updateModel() {
    const modelElement = document.getElementById('Models');
    modelElement.src = models[currentIndex];
}

function prevModel() {
    currentIndex = (currentIndex - 1 + models.length) % models.length;
    updateModel();
}

function nextModel() {
    currentIndex = (currentIndex + 1) % models.length;
    updateModel();
}