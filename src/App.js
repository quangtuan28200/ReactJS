/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Header from './components/header';
import Product from './components/product';

function App() {
    var products = [
        {
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CiYcSJM3deGaAWqZ0239mDr7lkc-uRC6zA&usqp=CAU',
            title: 'Cart title 1',
            price: '1.000.000 đ'
        },
        {
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CiYcSJM3deGaAWqZ0239mDr7lkc-uRC6zA&usqp=CAU',
            title: 'Cart title 2',
            price: '2.000.000 đ'
        },
        {
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CiYcSJM3deGaAWqZ0239mDr7lkc-uRC6zA&usqp=CAU',
            title: 'Cart title 3',
            price: '3.000.000 đ'
        },
        {
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CiYcSJM3deGaAWqZ0239mDr7lkc-uRC6zA&usqp=CAU',
            title: 'Cart title 4',
            price: '4.000.000 đ'
        },
    ];

    var products_comp = products.map((product, index) => {
        return  <Product 
                    key = {index}
                    thumbnail= {product.thumbnail}
                    title= {product.title}
                    price={product.price}
                />
    });

    return (
        <>
            <header><Header /></header>
            <div id="content">
                <div className="container">
                    <div className="row">
                        {products_comp}
                    </div>
                </div>
            </div>
            <footer></footer>
        </>
    );
}

export default App;
