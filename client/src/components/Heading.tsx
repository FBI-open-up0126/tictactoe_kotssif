import { elementWithClass } from "../utils/componentWithClass";

interface Props extends React.ComponentPropsWithoutRef<"h1"> {
    size: 1 | 2 | 3 | 4 | 5 | 6;
}

function Heading({ size, ...props }: Props) {
    return elementWithClass(`h${size}`, `font-bold text-${8 - size}xl`)({ ...props });
}

export default Heading;
