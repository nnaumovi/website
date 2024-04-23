precision mediump float;

uniform float uResolution;
uniform float uTime;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    vec3 color = vec3(0.0);

    // Sample surrounding pixels
    for (float x = -1.0; x <= 1.0; x++) {
        for (float y = -1.0; y <= 1.0; y++) {
            vec2 offset = vec2(x, y) / uResolution;
            color += texture2D(uSampler, uv + offset).rgb;
        }
    }

    // Average color of surrounding pixels
    color /= 9.0;

    // Add some animation
    float r = sin(uTime) * 0.5 + 0.5;
    float g = cos(uTime * 0.5) * 0.5 + 0.5;
    float b = sin(uTime * 0.7) * 0.5 + 0.5;

    gl_FragColor = vec4(color * vec3(r, g, b), 1.0);
}
