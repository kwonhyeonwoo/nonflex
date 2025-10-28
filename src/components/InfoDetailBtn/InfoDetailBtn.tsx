import { Button } from './style/style'

interface Props {
  onBannerModal: () => void;
}

const InfoDetailBtn = ({ onBannerModal }: Props) => {
  return (
    <Button onClick={onBannerModal}>
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        data-icon="CircleIMedium"
        data-icon-id=":rp:"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        role="img"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0m13-2v8h-2v-8zm-1-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span>상세 정보</span>
    </Button>
  );
};

export default InfoDetailBtn