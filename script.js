// script.js - 視覺特效控制

// 1. 滾動觸發卡片動畫 (Intersection Observer)
const cards = document.querySelectorAll('.card-container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

cards.forEach(card => {
    observer.observe(card);
});


// 2. 背景粒子特效 (Canvas)
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('canvas-container').appendChild(canvas);

let width, height;
let particles = [];

// RWD 調整
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

// 粒子物件
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8; // 水平速度
        this.vy = (Math.random() - 0.5) * 0.8; // 垂直速度
        this.size = Math.random() * 2;
        this.color = Math.random() > 0.9 ? '#ff0055' : '#00f2ff'; // 偶爾出現紅色粒子
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // 邊界反彈
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// 初始化粒子
function initParticles() {
    particles = [];
    // 根據螢幕大小決定粒子數量，避免手機版太卡
    const particleCount = window.innerWidth < 600 ? 30 : 60;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

// 動畫迴圈
function animate() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    // 繪製連線 (模擬神經網絡/構造連線)
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < 120) {
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth = 0.3;
                ctx.globalAlpha = 1 - dist/120; // 距離越遠越透明
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}

// 啟動
window.addEventListener('resize', () => {
    resize();
    initParticles();
});
resize();
initParticles();
animate();