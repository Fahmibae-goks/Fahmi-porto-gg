const scrollup = document.queryselector;
(".scroll-up");

window.onscroll = () => {
    if (window.scrollY > 400){
            scrollup.classlist.add
            ('scroll-active');
    } else {
        scrollup.classlist.remove
        ('scroll-active');
    }
};