function ItemCard(props: ({
    title: string, 
    image: string, 
    price: string})) {
    return(
        <div className="Item_card">
            <a className="Item_card__title">{props.title}</a>
            <a className="Item_card__image_link"><img src={props.image} className="Item_card__image"/></a>
            <p className="Item_card__price">Цена: <b>{props.price} за 1 кг.</b></p>
            <a className="Item_card__learn_more">Подробнее</a>
        </div>
    )
}
export default ItemCard;