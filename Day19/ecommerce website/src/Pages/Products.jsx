import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { GET_PRODUCTS } from '../redux/ActionType';
import { Link } from 'react-router-dom';
import Pagination from '../Component/Pagination';

export default function Products() {
    const productData = useSelector(store => store.products);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [displayProduct, setDisplayProduct] = useState(productData);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    // Fetch products based on search query
    useEffect(() => {
        console.log(page)
        axios.get(`http://localhost:8000/products?_limit=4&_page=${page}&q=${search}`)
            .then((data) => {
                dispatch({ type: GET_PRODUCTS, payload: data.data });
            });
    }, [search, dispatch, page]);

    // Filter by category
    useEffect(() => {
        if (category) {
            const filterByCategoryData = productData.filter((item) => item.category === category);
            setDisplayProduct(filterByCategoryData);
        } else {
            setDisplayProduct(productData);
        }
    }, [category, productData]);

    // Filter by price range


    // Sorting products
    const handleAsc = () => {
        const sortAsc = [...displayProduct].sort((a, b) => a.price - b.price);
        setDisplayProduct(sortAsc);
    };

    const handleDesc = () => {
        const sortDesc = [...displayProduct].sort((a, b) => b.price - a.price);
        setDisplayProduct(sortDesc);
    };


    // pagination 


    return (
        <div>
            {/* Search Input */}
            <div>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder='Search products here...'
                />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                {/* Filter by Category */}
                <div style={{ border: "1px solid black", margin: "5px", padding: "5px", textAlign: 'left', width: "10%" }}>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={category === "mens"}
                                onChange={() => setCategory("mens")}
                            />
                            Mens
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={category === "womens"}
                                onChange={() => setCategory("womens")}
                            />
                            Womens
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={category === "kids"}
                                onChange={() => setCategory("kids")}
                            />
                            Kids
                        </label>
                    </div>

                    {/* Sorting by Price */}
                    <div>
                        <button onClick={handleAsc}>Asc</button><br />
                        <button onClick={handleDesc}>Desc</button>
                    </div>

                    {/* Filter by Price */}

                </div>

                {/* Display Products */}
                <div className='productDiv' style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
                    {displayProduct.map((item) => (
                        <Link key={item.id} to={`/singleproductpage/${item.id}`}>
                            <div className='items'>
                                <img width="200px" src={item.image} alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>{item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


            {/* pagination */}

            <div>
                <Pagination page={page} incPage={setPage} />
            </div>







        </div>
    );
}
