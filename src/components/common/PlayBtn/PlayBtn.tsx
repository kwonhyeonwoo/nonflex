import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { PlayButton } from './css';

type Props = {
    type: "play" | "info";
    id?: number;
    Active?: (id: number) => void;
};

const PlayBtn = ({ id, type, Active }: Props) => {
    return (
        <PlayButton
            type={type}
            onClick={() => {
                if (id && Active) {
                    Active(id)
                }
            }}
            className='play-btn'
        >
            {type === "play" ? (
                <>
                    <FontAwesomeIcon
                        className="play-btn"
                        icon={faPlay}
                    />
                    <span>재생</span>
                </>
            ) : (
                <>
                    <FontAwesomeIcon
                        className="info-btn"
                        icon={faExclamation} />
                    <span>상세정보</span>
                </>
            )}
        </PlayButton>
    )
}

export default PlayBtn