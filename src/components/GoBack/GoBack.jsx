import { GoBackBtn } from './GoBack.styled';

const GoBack = ({ onClick }) => {
  return (
    <div>
      <GoBackBtn variant="outlined" onClick={onClick}>
        Go back
      </GoBackBtn>
    </div>
  );
};

export default GoBack;
