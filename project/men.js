$(document).ready(function() {

    $('.section').click(function() {
        var sectionId = $(this).data('target');
        alert('Clicked on ' + sectionId + ' section!');
    });

    $('#searchButton').click(function() {
        var searchQuery = $('#searchInput').val();
        alert('Searched for: ' + searchQuery);
    });

    $('#shopNowButton').click(function() {
        alert('Clicked on "Shop Now" button!');
    });

    $('#featuredImage').on('contextmenu', function() {
        return false;
    });
});

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        var price = $('#price').val();
        var condition = $('#condition').val();
        var brand = $('#brand').val();
        var color = $('#color').val();
        var bandType = $('#band-type').val();
        var material = $('#material').val();
        var caseSize = $('#case-size').val();

        alert('Applying filters: Price=' + price + ', Condition=' + condition + ', Brand=' + brand +
            ', Color=' + color + ', Band Type=' + bandType + ', Material=' + material + ', Case Size=' + caseSize);
    });
});


