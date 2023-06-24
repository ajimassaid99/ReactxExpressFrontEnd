import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../App/features/products/actions";
import "./index.scss";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  if (!state.product) {
    return <div>Loading...</div>;
  }else{

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>: {state.product._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {state.product.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: {state.product.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {state.product.stock}</td>
          </tr>
          <tr>
            <td>Gambar</td>
            <td align="center">
              : <img src={state.product.image_url} alt="Product" height={100} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );}
};

export default Detail;
