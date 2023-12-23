$(document).ready(function() {
    var sectionsData = [
        { id: 'home', name: 'Home', page: 'index.html'},
        { id: 'men', name: 'Men', page: 'men.html' },
        { id: 'women', name: 'Women', page: 'women.html' },
        { id: 'brands', name: 'Brands', page: 'brands.html' }
    ];

    sectionsData.forEach(function(section) {
        $('.sections').append('<div class="section" id="' + section.id + '">' + section.name + '</div>');
    });

    $('.section').click(function() {
        var sectionId = $(this).attr('id');
        var targetPage = sectionsData.find(function(section) {
            return section.id === sectionId;
        }).page;

        window.location.href = targetPage;
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
