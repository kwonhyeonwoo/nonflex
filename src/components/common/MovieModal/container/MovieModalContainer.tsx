import { useLocation, useNavigate } from "react-router-dom"
import MovieModal from "../MovieModal"

const MovieModalContainer = () => {
    const { state } = useLocation();
    const nav = useNavigate();
    const handleModalClose = () => nav(-1)
    console.log('state', state)
    return (
        <MovieModal
            data={state}
            onModalClose={handleModalClose}
        />
    )
};

export default MovieModalContainer