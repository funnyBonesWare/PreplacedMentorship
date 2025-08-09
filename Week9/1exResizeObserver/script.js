const box = document.getElementById("box");

const observer = new ResizeObserver(onResize);

function onResize(entries){
    const w = entries[0].contentRect.width;
    box.style.flexDirection = w < 400 ? "column" : "row";
}

observer.observe(box);
