const CartList = ({ array, onChange, onClick }) => {
  return (
    <>
      {array.map(item => {
        return (
          <li key={item._id}>
            <img
              src={`https://s7d1.scene7.com/is/image/mcdonalds/${item.img_path}`}
              width="240"
              alt={item.name}
            />
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
