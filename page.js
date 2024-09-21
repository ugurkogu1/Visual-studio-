const box = document.getElementById('animate');
let position = 0;
const animate = () => {
    if (position < 350) {
        position++;
        box.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }
};
animate();
