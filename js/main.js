function toggleSearch() {
    var menubar = document.getElementById("menubar");
    menubar.classList.toggle("hidden");

    var searchbar = document.getElementById("searchbar");
    searchbar.classList.toggle("active");

    var searchicon = document.getElementById("searchicon");
    searchicon.classList.toggle("active");
}

document.querySelector('#searchicon').addEventListener('click', toggleSearch);
