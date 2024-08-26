$(document).ready(function() {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Modal functionality
    $('.carousel-item').click(function() {
        var title = $(this).data('title');
        var author = $(this).data('author');
        var rating = $(this).data('rating');
        var price = $(this).data('price');
        var description = $(this).data('description');
        var imgSrc = $(this).find('img').attr('src');

        $('#modal-title').text(title);
        $('#modal-author').text('By ' + author);
        $('#modal-rating').text('Rating: ' + rating);
        $('#modal-price').text('Price: ' + price);
        $('#modal-description').text(description);
        $('#modal-img').attr('src', imgSrc);

        $('#manga-modal').show();
    });

    $('.close-btn').click(function() {
        $('#manga-modal').hide();
    });

    $(window).click(function(event) {
        if ($(event.target).is('#manga-modal')) {
            $('#manga-modal').hide();
        }
    });
});
