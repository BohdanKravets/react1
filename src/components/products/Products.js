import {useEffect} from "react";
import {fetchProducts} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import Product from "../product/Product";

export default function Products() {
    const {products, isProductsLoading} = useSelector(({products}) => products);
    console.log(products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts({
            field: 'price',
            order: 'ASC'
        }));
    }, []);

    if (isProductsLoading) {
        return <LoadingScreen data={'Products'}/>
    }

    return (
        <div>
            {
                products.map(value => <Product key={value.id} item={value}/>)
            }
        </div>
    );
}