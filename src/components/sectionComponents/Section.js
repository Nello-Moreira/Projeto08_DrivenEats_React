import SectionTitle from './SectionTitle'
import Option from '../optionComponents/Option'
import React, { useState } from "react";

export default function Section(props) {
    let activeChilds = [];

    const childActivationHandler = (child) => {
        if (activeChilds.length === 0) {
            activeChilds.push(child);
            return;
        }
        activeChilds.forEach((element, index) => {
            if (element.id === child.id) {
                if(child.itemQuantity > 0){
                    activeChilds[index] = child;
                    return;
                }
                activeChilds.splice(index, 1)
                return;
            }
            if (index === (activeChilds.length - 1)) {
                activeChilds.push(child);
                return;
            }
        });
        console.log("activeChilds ", activeChilds);
    };

    return (
        <section id={props.id} className="section">
            <SectionTitle title={props.title} />
            <ul>
                {props.options.map((option, key) => (
                    <Option
                        optionInfos={option}
                        parentActivationHandler={childActivationHandler}
                        id={key}
                        key={key}
                    />
                ))}
            </ul>
        </section>
    )
}
