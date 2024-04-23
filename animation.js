function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = `${Math.random() * 50}px`;
    circle.style.height = circle.style.width;
    circle.style.top = `${Math.random() * window.innerHeight}px`;
    circle.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(circle);
}