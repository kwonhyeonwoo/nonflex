import  { useCallback } from 'react'
import Modal from '../Modal'
import { useMatch, useNavigate } from 'react-router-dom'
import type { IMovie, IMovieResult } from 'movie'
import { useQueryClient } from '@tanstack/react-query';
import { useMovieStore } from '../../../store/useMovieStore';

const ModalContainer = () => {
    const { movieKey } = useMovieStore();
    const data = useQueryClient().getQueryData<IMovie>(["movies", movieKey]);
    const navigate = useNavigate();
    const movieMatch = useMatch('/movies/:id');
    const movieResult = data?.results.find(
      (find) => String(find.id) === movieMatch?.params.id
    );
    const handleCloseModal = useCallback(
      () => {
        return navigate('/')
      },
      [navigate],
    )
  return (
    <Modal 
        data={movieResult as IMovieResult}
        layoutId={movieMatch?.params.id} 
        onCloseModal={handleCloseModal} 
    />
  );
}

export default ModalContainer