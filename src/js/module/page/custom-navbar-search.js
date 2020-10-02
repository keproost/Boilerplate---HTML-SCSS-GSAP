const customNavbarSearch = {
    navbarSearch() {
        // Declare variables
        let a;
        let i;
        let txtValue;
        const input = document.getElementById('myInput');
        const filter = input.value.toUpperCase();
        const ul = document.getElementById('myUL');
        const li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName('a')[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    }

};


export default customNavbarSearch;
