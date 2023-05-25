import { GoBackBtn } from './GoBack.styled';

const GoBack = ({ onClick }) => {
  return (
    <div>
      <GoBackBtn type="button" onClick={onClick}>
        Go back
      </GoBackBtn>
    </div>
  );
};

export default GoBack;
