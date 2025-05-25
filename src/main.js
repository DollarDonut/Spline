import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('app');
const spline = new Application(canvas);

let cubeObj = null;

spline
    .load('https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode')
    .then(() => {
        cubeObj = spline.findObjectByName('Cube');
        console.log(cubeObj);
        // Optionally move the object on load:
        // cubeObj.position.x += 10;
    });


spline.load('https://prod.spline.design/dfJtkCaMlS3hiSo5/scene.splinecode');
