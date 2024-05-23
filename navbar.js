document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch navbar');
        }
        return response.text();
    })
    .then(data => {
        console.log('Navbar loaded successfully');
        document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar:', error));
});
