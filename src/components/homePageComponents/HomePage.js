import Section from '../sectionComponents/Section';
import ReviewOrderButton from './ReviewOrderButton';
import React, { useState } from 'react';
import menu from '../../auxiliar/data';

export default function HomePage({ redirectTo, selectedOptions, saveOptions }) {
	const isSectionEmpty = Object.values(selectedOptions).map(
		optionsArray => optionsArray.length > 0
	);

	const isActiveOptionsFull = !isSectionEmpty.includes(false);

	const [isEnabled, setIsEnabled] = useState(isActiveOptionsFull);

	const activeModifier = (section, sectionActiveOptions) => {
		selectedOptions[section] = sectionActiveOptions;

		saveOptions(selectedOptions);

		if (
			selectedOptions.meal.length > 0 &&
			selectedOptions.drink.length > 0 &&
			selectedOptions.dessert.length > 0
		) {
			setIsEnabled(true);
			return;
		}
		setIsEnabled(false);
	};

	return (
		<>
			<div className='content'>
				{menu.map((section, key) => (
					<Section
						sectionInfos={section}
						activeChilds={selectedOptions[section.id]}
						parentRecordChanger={activeModifier}
						key={key}
					/>
				))}
			</div>
			<ReviewOrderButton redirectTo={redirectTo} isEnabled={isEnabled} />
		</>
	);
}
