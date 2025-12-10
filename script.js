// 處理 Modal 視窗開關
function showModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// 點擊 Modal 外部時關閉
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// 簡單的滾動動畫 (Optional: 可視區域顯現)
window.addEventListener('scroll', function() {
    let items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        let rect = item.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
});