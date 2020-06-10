// 今回の交差を監視する要素
const boxes = document.querySelectorAll(".linked");

const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "-30% 0px", // ビューポートの中心を判定基準にする
    threshold: 0 // 閾値は0
};
const observer = new IntersectionObserver(doWhenIntersect, options);
// それぞれのboxを監視する
boxes.forEach(box => {
    observer.observe(box);
});

function doWhenIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            setTimeout(() => {
                entry.target.classList.remove('active');
            }, 1000);
        }
    });
}