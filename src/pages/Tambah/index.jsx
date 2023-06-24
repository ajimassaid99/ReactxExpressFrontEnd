import { useState } from "react";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../App/features/products/actions";
import "./index.scss";

const Tambah = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("price", event.target.price.value);
    formData.append("stock", event.target.stock.value);
    formData.append("status", event.target.status.checked);
    formData.append("image", file);
    dispatch(addProduct(formData));
    if (state.error === '') {
        alert("Data Sudah di tambahkan");
        window.location.href = "/";
    }
  };

  return (
    <div className="main">
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" />
          <Input name="stock" type="number" placeholder="Stok Produk..." label="Stok" />
          <Input name="status" type="checkbox" label="Active" checked={status} onChange={(event) => setStatus(event.target.checked)} />
          <Input name="image" type="file" accept="image/*" onChange={handleFileChange} />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;