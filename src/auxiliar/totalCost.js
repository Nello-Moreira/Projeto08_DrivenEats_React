const priceToNumber = priceString => Number(priceString.replace(",", "."));
const reducerFunction = (accumulator, currentValue) => (accumulator + currentValue);

const getSectionTotalPrice = (section) => (
    section
        .map(item => priceToNumber(item.price) * item.itemQuantity)
        .reduce(reducerFunction)
);

const getTotalCost = (allSections) => (
    Object.keys(allSections)
        .map(section => (getSectionTotalPrice(allSections[section])))
        .reduce(reducerFunction)
        .toFixed(2).toString().replace(".", ",")
);

export default getTotalCost;