//create an alert that says "Button  clicked!" when a user clicks the search button

// $('.search-button').click(function () {
//     alert("Button clicked!");
// })

//search-button


// console.log(searchString);

var displayWikipediaData = function () {

    var $linksElement = $('#links');
    var searchString = $('#searchString').val();
    var wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=wikicallback";
    // var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchateam + "&format=json&callback=?";
    $.ajax(
        {
        url: wikipediaUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(res) {
            var linkLists = res[1];
            console.log(linkLists );
            linkLists.forEach(function (item) {
                var url = 'https://en.wikipedia.org/wiki/' + item;
                console.log(url);
                $linksElement.append('<li><a target="_blank" href="' + url + '">' + item + '</a></li>');
            })
            //do somthing
            // console.log("Yay! Success! Our ajax request worked!");
            
            //output the results of the wikipidia data onto the screen

        }

    });
    return false;
    

}

$('#form').submit(displayWikipediaData);