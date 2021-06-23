/* eslint-disable jsx-a11y/anchor-is-valid */
// import thumbnail from '../../public/logo192.png';
function Product(props) {
    return (
        <div className="col-3">
            <div className="card">
                <img src={props.thumbnail} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.price}</p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>          
        </div>
    );
}

export default Product;
