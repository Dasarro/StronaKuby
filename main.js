window.onscroll = () => {
    if (window.scrollY != 0) 
        document.querySelector('nav').style.backgroundColor = "rgba(0, 0, 0, 1)";
    else 
        document.querySelector('nav').style.backgroundColor = "rgba(0, 0, 0, 0)";
}