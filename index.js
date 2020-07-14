//Submit Search Function
function submitSearch() {
    var checkedBox = document.querySelector('input[name=filters]:checked').value;
    var url = "https://www.";
    var searchText = document.getElementById("searchBox").value;
    
    //Page Redirection logic
    switch (checkedBox) {
        case "duck":
            if(searchText.indexOf(".") < 1){
                url = "http://www.duckduckgo.com/?q=";
            }
            url += searchText;
            break;
        case "image":
            url = "http://www.duckduckgo.com/?q=" + searchText + "&t=ffab&iax=images&ia=images";
            break;
        case "map":
            url = "https://www.google.com/maps/place/" + searchText;
            break;
        case "youtube":
            url = "https://www.youtube.com/results?search_query=" + searchText;
            break;
        case "amazon":
            url = "https://www.amazon.co.uk/s?k=" + searchText;
            break;
        default:
            url = "index.html";
            break;
    }
    
    //Redirecting the page to the desired result
    window.open(url);
}