import './Header.css'


export default function Header() {
    return (
        <div>
            <>
                <header className={'flex'}>
                    <h3>Shop</h3>
                    <div className={'flex'}>
                        <h3>Cart: {0}</h3>
                        <h3>Wishlist: {0}</h3>
                    </div>
                </header>

                <hr/>
            </>
        </div>
    );
}