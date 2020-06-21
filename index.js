//Submit Search Function
function submitSearch() {
    var checkedBox = document.querySelector('input[name=filters]:checked').value
    var url;
    var searchText = document.getElementById("searchQuery").value;
    
    //Page Redirection logic
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
    
    //Redirecting the page to the desired result
    window.location.href = url;
    alert("Searching...");
}