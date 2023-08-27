import { useState } from "react";
import getSmallCount from "../../utils/getSmallCount";

import "./Shop.scss";

const Shop = ({count, updatePlusCount, updateAutoCount}) => {
    const [price1, setPrice1] = useState(10);
    const [price2, setPrice2] = useState(4650);
    const [price3, setPrice3] = useState(11500);
    const [price4, setPrice4] = useState(26600);
    const [price5, setPrice5] = useState(52400);
    const [autoPrice1, setAutoPrice1] = useState(10);
    const [autoPrice2, setAutoPrice2] = useState(4650);
    const [autoPrice3, setAutoPrice3] = useState(11500);
    const [autoPrice4, setAutoPrice4] = useState(26600);
    const [autoPrice5, setAutoPrice5] = useState(52400);

    const clickBtns = [
        {price: price1, setPrice: setPrice1, updateCount: updatePlusCount, plus: 1, symbol: '+'},
        {price: price2, setPrice: setPrice2, updateCount: updatePlusCount, plus: 5, symbol: '+'},
        {price: price3, setPrice: setPrice3, updateCount: updatePlusCount, plus: 10, symbol: '+'},
        {price: price4, setPrice: setPrice4, updateCount: updatePlusCount, plus: 100, symbol: '+'},
        {price: price5, setPrice: setPrice5, updateCount: updatePlusCount, plus: 500, symbol: '+'},
        {price: autoPrice1, setPrice: setAutoPrice1, updateCount: updateAutoCount, plus: 1, symbol: 'auto +'},
        {price: autoPrice2, setPrice: setAutoPrice2, updateCount: updateAutoCount, plus: 5, symbol: 'auto +'},
        {price: autoPrice3, setPrice: setAutoPrice3, updateCount: updateAutoCount, plus: 10, symbol: 'auto +'},
        {price: autoPrice4, setPrice: setAutoPrice4, updateCount: updateAutoCount, plus: 100, symbol: 'auto +'},
        {price: autoPrice5, setPrice: setAutoPrice5, updateCount: updateAutoCount, plus: 500, symbol: 'auto +'}
        
    ];

    const addBtn = (btnArray) => {
        return btnArray.map((item, index) => {
            return (
                <li key={index} onClick={() => update(item.plus, item.price, item.setPrice, item.updateCount)} className="shop__upgrade">
                    <div className="shop__upgrade-title">{item.symbol}{item.plus}</div>
                    <div className="shop__upgrade-price">{getSmallCount(item.price, '$')}</div>
                </li>
            )
        })
    }

    const update = (value, price, setPrice, updateCount) => {
        if (count >= price) {
            setPrice(price => Math.floor(price * 5.5));
            updateCount(value, price);
        }
    }

    return (
        <div className="shop">
            <div className="shop__title">SHOP / UPGRADES</div>
            <ul className="shop__upgrades">
                {addBtn(clickBtns)}
            </ul>
        </div>
    )
}

export default Shop;