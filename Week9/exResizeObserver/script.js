const box = document.getElementById("box");

const observer = new ResizeObserver(onResize);

function onResize(entries){
    for(const entry of entries){
        console.clear();
        console.log("contentRect:", entry);
        console.log("borderBoxSize:", entry.borderBoxSize?.[0]);
        console.log("contentBoxSize:", entry.contentBoxSize?.[0]);
        console.log("devicePixelContentBoxSize:", entry.devicePixelContentBoxSize?.[0]);
    }
}

observer.observe(box);
