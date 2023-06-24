import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../App/features/products/actions";
import { Link } from "react-router-dom";
import "./index.scss";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts(search));
  }, [dispatch, search]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      dispatch(deleteProduct(id));
      dispatch(fetchProducts(search));
      if(state.deleteerror !== ''){
        alert("data berhasil dihapus ");
      }
    }
  };

  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tambah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Image</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {state.loading ? (
            <tr>
              <td colSpan="7">Loading...</td>
            </tr>
          ) : state.error ? (
            <tr>
              <td colSpan="7">{state.error}</td>
            </tr>
          ) : state.products.length === 0 ? (
            <tr>
              <td colSpan="7">Data Kosong</td>
            </tr>
          ) : (
            state.products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.status ? "Active" : "NonActive"}</td>
                <td>
                  <img src={product.image_url} alt="Product" width="100" />
                </td>
                <td>
                  <Link
                    to={`/detail/${product._id}`}
                    className="btn btn-sm btn-info"
                  >
                    Detail
                  </Link>
                  <Link
                    to={`/edit/${product._id}`}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </Link>
                  <button className="btn btn-sm  btn-danger" onClick={() => handleDelete(product._id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;