import React from "react";

interface RequiredProps {
    className?: string;
}

export function componentWithClass<T extends RequiredProps>(
    Component: React.ComponentType<T>,
    addedClassNames?: string
) {
    return (props: T) => {
        return <Component {...props} className={`${addedClassNames} ${props.className}`} />;
    };
}

export function elementWithClass(Component: React.ElementType, addedClassNames?: string) {
    return (props: React.ComponentPropsWithoutRef<typeof Component>) => {
        return <Component {...props} className={`${addedClassNames} ${props.className}`} />;
    };
}
