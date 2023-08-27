import { useState, useEffect } from "react";

import MainScreen from "../Main-screen/MainScreen";
import Shop from "../Shop/Shop";

function App() {
	const [plusCount, setPlusCount] = useState(1);
	const [count, setCount] = useState(0);
	const [totalMoney, setTotalMoney] = useState(0);
	const [autoCount, setAutoCount] = useState(0);

	useEffect(() => {
		if (autoCount) {
			const interval = setInterval(() => {
				setCount(count => count + autoCount);
				setTotalMoney(totalMoney => totalMoney + autoCount);
			}, 1000);
			return () => clearInterval(interval);
	}
	}, [autoCount]);

	const updateAutoCount = (value, price) => {
		setAutoCount(autoCount => autoCount + value);
		setCount(count => count - price);
	}

	const updatePlusCount = (value, price) => {
		setPlusCount(count => count + value);
		setCount(count => count - price);
	}

	const updateCount = () => {
		setCount(count => count + plusCount);
		setTotalMoney(totalMoney => totalMoney + plusCount);
	}

    return (
		<div className="App">
			<MainScreen 
				count={count} 
				totalMoney={totalMoney} 
				updateCount={updateCount} 
				plusCount={plusCount}
				autoCount={autoCount}/>
			<Shop 
				count={count} 
				updatePlusCount={updatePlusCount}
				updateAutoCount={updateAutoCount}/>
		</div>
    );
}

export default App;
