import { useState } from "react";
import getSmallCount from "../../utils/getSmallCount";

import "./MainScreen.scss";

const MainScreen = ({count, totalMoney, updateCount, plusCount, autoCount}) => {
    const [clicks, setClicks] = useState(0);

    const update = () => {
        setClicks(clicks => clicks + 1);
        updateCount();
    }

    return (
        <main className="main-screen">
            <div className="main-screen__count">${getSmallCount(count)}</div>
            <ul className="main-screen__info">
                <li>Clicks: {getSmallCount(clicks)}</li>
                <li>Total money: {getSmallCount(totalMoney, '$')}</li>
                <li>Total sell: {getSmallCount(totalMoney - count, '$')}</li>
                <li>Click: {getSmallCount(plusCount, '+$')}</li>
                <li>Auto: {autoCount ? getSmallCount(autoCount, '+$') : '-'}</li>
            </ul>
            <button onClick={update} className="main-screen__button">CLICK ON ME AND GET THE MONEY!</button>
        </main>
    )
}

export default MainScreen;