import './Product.css'

export default function Product({item}) {
    return (
        <div className={'product'}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <img src={item.image} alt={item.title}/>
        </div>
    );
}