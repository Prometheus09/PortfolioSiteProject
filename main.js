
//load posts from json file
function renderPosts(posts) {


    var postsDiv = document.getElementById("posts");

    
  

    posts.forEach(function (post) {
        //create DOM elements
        var postDiv = document.createElement("div");
        var postNameDiv = document.createElement("div");
        var postAuthorDiv = document.createElement("div");
        var postContentDiv = document.createElement("div");
        //set the content of each element
        postNameDiv.innerHTML = post.name;
        postAuthorDiv.innerHTML = post.author;
        postContentDiv.innerHTML = post.content;
        // set css classes on each div so they can be styled
        postDiv.setAttribute("class", "post");
        postNameDiv.setAttribute("class", "post-name");
        postAuthorDiv.setAttribute("class", "post-author");
        postContentDiv.setAttribute("class", "post-content");

        //assemble the post div
        postDiv.appendChild(postNameDiv);
        postDiv.appendChild(postAuthorDiv);
        postDiv.appendChild(postContentDiv);

        postsDiv.appendChild(postDiv);

    });
}

function getPosts(callback) {
    var request = new XMLHttpRequest();

    request.onload = function () {

        var posts = JSON.parse(request.responseText);

        callback(posts);
    };

    request.open("GET", "posts.json", true);
    request.send(null);
}

getPosts(function (posts) {

    renderPosts(posts);
});

//search json file 
$('#search').keyup(function () {
    var searchTerm = $(this).val(); 
    var myExp = new RegExp(searchTerm, "i");
    if (searchTerm == "") {
        $('#update').html("");
        $('#posts').fadeIn(400);
        $('.pagination').fadeIn(400);
    }
    else {
        $.getJSON('posts.json', function (data) {

            var output = "<div id='result'>";
            $.each(data, function (key, val) {

                if (val.name.search(myExp) != -1) {
                    output += '<p>';
                    output += '<h3>' + val.name + '</h3>';
                    output += '<h5>' + val.author + '</h5>';
                    output += '<h6>' + val.content + '</h6>';
                    output += '</p>';
                }
            });

            output += "</div>";
            $('#update').html(output);
            $('#posts').fadeOut(40);
            $('.pagination').fadeOut(40);
        });
    }
});





