
// 2.1. Ajax


(() => {
    

function getWhat(){     
    async function getData() {
        let response = await fetch('https://thatsthespir.it/api');
        let blockquote = await response.json();
        return blockquote;
    }
    getData().then(blockquote => {
        let quote = document.getElementById("quote");
        let frame = document.getElementById("frame");
        let name = document.getElementById("author");

        frame.style.background = "url('"+blockquote.photo+"')";
        frame.style.backgroundSize = 'cover';
        quote.innerHTML = '"'+ blockquote.quote+'"';
        name.innerHTML = blockquote.author;
    
        if (blockquote.photo==""){
            frame.style.height = '0px';
            frame.style.width = '0px';
        }
    })
}
getWhat(); 
document.getElementById("run").addEventListener("click", () => {
    frame.style.height = '120px';
    frame.style.width = '120px';
    getWhat();
});

})();

