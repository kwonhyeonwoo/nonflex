import  { useCallback } from 'react'
import Modal from '../Modal'
import { useMatch, useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query';
import {  useContentStore } from '../../../store/useContentStore';
import type { IContentBase } from 'content';

interface Props{
  link?:string;
}

const ModalContainer = ({link}:Props) => {
    const { contentKey ,category} =  useContentStore();
    console.log("contentKey", contentKey, "cate", category);
    const data = useQueryClient().getQueryData<IContentBase>
    (["contents",category, contentKey]);
    const navigate = useNavigate();
    const movieMatch = useMatch(link ? `${link}/movies/:id` : `movies/:id`)
    const movieResult = data?.results.find(
      (find) => String(find.id) === movieMatch?.params.id
    );
    const handleCloseModal = useCallback(
      () => {
        return navigate(link ? `/${link}` : "/")
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