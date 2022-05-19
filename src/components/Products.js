const Products = ({ sortedProducts }) => {

    const formatPrice = (price) => {
        
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        
        return formatter.format(price);
    }

    const formatDate = (date) => {
        const formated = new Date(date)

        return formated.toLocaleDateString("en-US", {
            day:'2-digit',
            month:'short',
            year:'numeric',
        })
    }
    return (
        <div className="container d-flex flex-wrap">
            {
                sortedProducts.map((item, i) => (
                    <div key={i} className="border rounded m-3 p-3">
                        <div className="mb-2">
                            <span className="me-2">
                                Date Added:
                            </span>
                            <span className="fw-bold">
                                {/* {new Date(item.added).toLocaleDateString()} */}
                                {formatDate(item.added)}
                            </span>
                        </div>
                        {
                            item.featured &&
                            <div className="fw-bold">
                                <u>
                                    <span className="me-2">
                                        {"⭐ FEATURED"}
                                    </span>
                                </u>
                            </div>
                        }
                        <div className="fw-bold h4">
                            {item.title}
                        </div>
                        <div className="fw-bold">
                            <span className="me-2">
                                Price:
                            </span>
                            {formatPrice(item.price)}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products