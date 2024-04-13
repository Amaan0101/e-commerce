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

const products = [
    { id: 1, name: 'Fashion Product 1', price: '$19.99' },
    { id: 2, name: 'car', price: '$29.99' , imageUrl: '/images/product1.jpg' },
    // more products...
];

app.get('/search', (req, res) => {
    const searchTerm = req.query.query.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    res.json(filteredProducts);
});
