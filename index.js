function submitSearch() {
    var checkedBox = document.querySelector('input[name=filters]:checked').value
    var url;
    var searchText = document.getElementById("searchQuery").value;
    
    switch (checkedBox) {
        case "duck":
            url = "http://www.duckduckgo.com/?q=" + searchText;
            break;
        case "image":
            url = "http://www.duckduckgo.com/?q=" + searchText + "&t=ffab&iax=images&ia=images";
            break
        case "map":
            url = "https://www.openstreetmap.org/search?query=" + searchText;
            break;
        case "youtube":
            url = "https://www.youtube.com/results?search_query=" + searchText;
            break;
        case "stackoverflow":
            url = "https://stackoverflow.com/search?q=" + searchText;
            break;
        default:
            url = "index.html";
            break;
    }
    
    window.location.href = url;
    alert("Searching...");
}

window.onload = function currentTime(){
    var d = new Date();
    document.getElementById("clock").innerText = d.toLocaleTimeString();
    setInterval(currentTime, 1000);
}