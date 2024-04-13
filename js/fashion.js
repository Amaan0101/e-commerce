document.querySelectorAll('.product-row').forEach(row => {
    let index = 0;

    row.querySelector('.prev').addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateRowPosition(row, index);
        }
    });

    row.querySelector('.next').addEventListener('click', () => {
        if (index < 1) { // Assuming there are only two sets of products (0 and 1)
            index++;
            updateRowPosition(row, index);
        }
    });

    function updateRowPosition(row, index) {
        // Calculate the width of three products (including any margin)
        const productWidth = row.querySelector('.product').offsetWidth;
        const totalShift = productWidth * 3 * index;
        
        row.querySelector('.row-container').style.transform = `translateX(${-totalShift}px)`;
    }
});

function searchProducts() {
    const searchTerm = document.getElementById('search-input').value;
    fetch(`/search?query=${searchTerm}`)
        .then(response => response.json())
        .then(data => displayResults(data));
}

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    results.forEach(product => {
        const productElement = `
            <div class="product">
                <img src="/images/suits1.avif" alt="${product.name}">
                <h3>"product name 7" </h3>
                <p>"29.99"</p>
            </div>
        `;
        resultsContainer.innerHTML += productElement;
    });
}

