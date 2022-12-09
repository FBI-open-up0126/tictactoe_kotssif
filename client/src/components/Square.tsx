import * as types from "../types/Types";
import Centered from "./Centered";

interface Props {
    mark: types.Square;
    onClick(): void;
}

function Square({ mark, onClick }: Props) {
    return (
        <Centered
            onClick={onClick}
            className="w-full h-full select-none text-7xl font-comic-sans cursor-pointer"
        >
            {mark}
        </Centered>
    );
}

export default Square;
