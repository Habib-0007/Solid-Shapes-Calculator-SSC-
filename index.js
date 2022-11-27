            /* Cube */

document.getElementById("getCubeResult").addEventListener("click", function () {
    let l = document.getElementById("cubeLength").value;
    l = Number(l);
    
    let unit = document.getElementById("cubeUnit").value;
    unit = String(unit);
   if (document.getElementById("getCubeArea").checked) {
       let a;
       a = 6 * Math.pow(l,2);
       document.getElementById("cubeResult").innerHTML = "The total surface area of the cube is = " + a + " " + unit + "<sup> 2 </sup>";
   }
   
   else if (document.getElementById("getCubeVolume").checked){
       let v;
       v = Math.pow(l,3);
       document.getElementById("cubeResult").innerHTML = " The volume of the cube is = " + v + " " + unit + "<sup> 3 </sup>";
   }
   
   else {
        document.getElementById("cubeResult").innerHTML = "you didn't select any option";
   }
})

            /* Cuboid */

document.getElementById("getCuboidResult").addEventListener("click", function () {
    let l = document.getElementById("cuboidLength").value;
    l = Number(l);
    
    let b = document.getElementById("cuboidBreadth").value;
    b = Number(b);

    let h = document.getElementById("cuboidHeight").value;
    h = Number(h);
    
    let unit = document.getElementById("cuboidUnit").value;
    unit = String(unit);
   if (document.getElementById("getCuboidArea").checked) {
       let a;
       a = 2 * ( l * b + l * h + b * h );
       document.getElementById("cuboidResult").innerHTML = "The total surface area of the cuboid is = " + a + " " + unit + "<sup> 2 </sup>";
   }
   
   else if (document.getElementById("getCuboidVolume").checked){
       let v;
       v = l * b * h;
       document.getElementById("cuboidResult").innerHTML = "The volume of the cuboid is = " + v + " " + unit + "<sup> 3 </sup>";
   }
   
   else {
        document.getElementById("cuboidResult").innerHTML = "you didn't select any option";
   }
})


            /* Cone */

document.getElementById("getConeResult").addEventListener("click", function () {

    let r = document.getElementById("coneRadius").value;
    r = Number(r);

    let h = document.getElementById("coneHeight").value;
    h = Number(h);
    
    let l = document.getElementById("coneSlantHeight").value;
    l = Number(l);

    let pi = Math.PI;
    pi = Number(pi);
    
    let unit = document.getElementById("coneUnit").value;
    unit = String(unit);
   if (document.getElementById("getConeArea").checked) {
       let a;
       a = pi * r * l  +  pi * r ** 2;
       document.getElementById("coneResult").innerHTML = "The total surface area of the cone is = " + a + " " + unit + "<sup> 2 </sup>";
   }
   
   else if (document.getElementById("getConeVolume").checked) {
       let v;
       v = pi * r ** 2 * h/ 3;
       document.getElementById("coneResult").innerHTML = "The volume of the cone is = " + v + " " + unit + "<sup> 3 </sup>";
   }
   
   else {
        document.getElementById("coneResult").innerHTML = "you didn't select any option";
   }
})


            /* Cylinder */

document.getElementById("getCylinderResult").addEventListener("click", function () {

    let r = document.getElementById("cylinderRadius").value;
    r = Number(r);

    let h = document.getElementById("cylinderHeight").value;
    h = Number(h);

    let pi = Math.PI;
    pi = Number(pi);
    
    let unit = document.getElementById("cylinderUnit").value;
    unit = String(unit);
    
   if (document.getElementById("getCylinderArea").checked) {
       let a;
       a = 2 * pi * r ** 2 + 2 * pi * r * h;
       document.getElementById("cylinderResult").innerHTML = "The total surface area of the cylinder is = " + a + " " + unit + "<sup> 2 </sup>";
   }
   
   else if (document.getElementById("getCylinderVolume").checked) {
       let v;
       v = pi * r ** 2 * h;
       document.getElementById("cylinderResult").innerHTML = "The volume of the cone is = " + v + " " + unit + "<sup> 3 </sup>";
   }
   
   else {
        document.getElementById("cylinderResult").innerHTML = "you didn't select any option";
   }
})
