import Section from "../sectionComponents/Section";
import ReviewOrderButton from './ReviewOrderButton';
import React, { useState } from "react";
import menu from "../../auxiliar/data";

const activeOptions = {
    meal: [],
    drink: [],
    dessert: []
};

export default function HomePage({ redirectTo, saveOptions }) {
    const isSectionEmpty = Object.values(activeOptions).map(optionsArray => optionsArray.length > 0);
    const isActiveOptionsFull = !(isSectionEmpty.includes(false));

    const [isEnabled, setIsEnabled] = useState(isActiveOptionsFull);

    const activeModifier = (section, sectionActiveOptions) => {
        activeOptions[section] = sectionActiveOptions;

        if (activeOptions.meal.length > 0 && activeOptions.drink.length > 0 && activeOptions.dessert.length > 0) {
            setIsEnabled(true);
            saveOptions(activeOptions);
            return;
        }
        setIsEnabled(false);
    }

    return (
        <>
            <div className="content">
                {menu.map((section, key) => (
                    <Section
                        sectionInfos={section}
                        activeChilds={activeOptions[section.id]}
                        parentRecordChanger={activeModifier}
                        key={key}
                    />))}
            </div>
            <ReviewOrderButton redirectTo={redirectTo} isEnabled={isEnabled} />
        </>
    )
}