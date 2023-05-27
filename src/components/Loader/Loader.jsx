import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      height={100}
      width={100}
      color="black"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ABABAB"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
