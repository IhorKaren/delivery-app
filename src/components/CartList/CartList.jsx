import defaultImage from '../NotFound/default-image.webp';

const CartList = ({ array, onChange, onClick }) => {
  return (
    <>
      {array.map(item => {
        return (
          <li key={item._id}>
            <img src={defaultImage} width="300" alt="" />
            <h3>{item.name}</h3>
            <p>Price: {item.price * item.quantity}</p>
            <input
              type="number"
              defaultValue="1"
              onChange={e => onChange(e, item._id)}
            />
            <button type="button" onClick={() => onClick(item._id)}>
              Remove
            </button>
          </li>
        );
      })}
    </>
  );
};

export default CartList;
