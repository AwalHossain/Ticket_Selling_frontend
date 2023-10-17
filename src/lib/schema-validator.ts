


export const getErrorMessagesByPropertyName = (obj: Record<string, any>,
    propertyPath: string
) => {
    const properties = propertyPath.split('.');
    let value = obj;

    for (const property of properties) {
        if (value[property]) {
            value = value[property];
        } else {
            return undefined;
        }
    }

    return value.message;
};