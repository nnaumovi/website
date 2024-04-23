const gl = canvas.getContext('webgl');
const program = createProgram(gl, 'vertexShader.glsl', 'fragmentShader.glsl');

const positionAttributeLocation = gl.getAttribLocation(program, 'aPosition');
const resolutionUniformLocation = gl.getUniformLocation(program, 'uResolution');
const timeUniformLocation = gl.getUniformLocation(program, 'uTime');

const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

const positions = [
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0,
    -1.0,  1.0,
     1.0, -1.0,
     1.0,  1.0,
];

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.useProgram(program);

gl.enableVertexAttribArray(positionAttributeLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);

let then = 0;

function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    gl.uniform1f(timeUniformLocation, now);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(render);
}

requestAnimationFrame(render);
