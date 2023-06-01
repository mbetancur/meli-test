import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "./styles/SearchItem.css"

const SearchItem = ({ item }) => {
    return (
        <Link href={`/items/${item.id}`} className="search-item">
            <Image className="search-item__image" src={item.thumbnail} alt={item.title} width="180" height="180" />
            <div className="search-item__content">
                <h2 className="search-item__price">$ {item.price}</h2>
                <h4 className="search-item__title">{item.title}</h4>
            </div>
            <p className="search-item__city">{item?.seller_address?.city?.name}</p>
        </Link>
    );
};

export default SearchItem;