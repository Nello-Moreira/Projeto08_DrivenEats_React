import './option.css';
import React, { useState } from 'react';
import Quantity from './Quantity';

export default function Option({ optionInfos, parentActivationHandler, id }) {
	const { name, description, price, img, itemQuantity } = optionInfos;
	const [isActive, setIsActive] = useState(
		optionInfos.itemQuantity > 0 ? true : false
	);

	const quantityHandler = quantity => {
		optionInfos.itemQuantity = quantity;

		if (quantity === 0) setIsActive(false);
	};

	const optionClickHandler = () => {
		if (optionInfos.itemQuantity === 0 && !isActive) {
			quantityHandler(1);
			setIsActive(true);
		}

		parentActivationHandler({ id, ...optionInfos });
	};

	return (
		<li
			className={isActive ? 'option active' : 'option'}
			onClick={optionClickHandler}
		>
			<img src={img} alt='dessert option' />
			<p className='option-name'>{name}</p>
			<p className='option-description'>{description}</p>
			<p className='price'>R$ {price}</p>
			{isActive ? (
				<Quantity
					itemQuantity={itemQuantity}
					parentQuantityHandler={quantityHandler}
				/>
			) : null}
		</li>
	);
}
