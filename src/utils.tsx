export const truncateToThreeDecimalPlaces = (stringNum: string): number => {
    const decimalIndex = stringNum.indexOf('.');

    // checks for a decimal point
    if (decimalIndex === -1 ) { return parseFloat(stringNum)}

    // keep up to 3 decimal places, convert to a float from string
    return  parseFloat(stringNum.slice(0, decimalIndex + 4));
}

export const truncateDescription = (description: string, lengthToShow: number) => {
    return description.length > lengthToShow ? `${description.substring(0, lengthToShow)}...` : description;
}
