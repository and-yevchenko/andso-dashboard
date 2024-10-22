export const createState = (initialValue) => {
    let value = initialValue;
    return {
        getState: () => value,
        setState: (newValue) => (value = newValue),
    };
};
