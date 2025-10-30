import  { useCallback } from 'react'
import Modal from '../Modal'
import { useMatch, useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';
import {  useContentStore } from '../../../store/useContentStore';
import type { IContentBase } from 'content';

const ModalContainer = () => {
    const { contentKey ,category} =  useContentStore();
    console.log('movieKEy',contentKey)
    const data = useQueryClient().getQueryData<IContentBase>([category, contentKey]);
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
        data={movieResult}
        layoutId={movieMatch?.params.id} 
        onCloseModal={handleCloseModal} 
    />
  );
}

export default ModalContainer