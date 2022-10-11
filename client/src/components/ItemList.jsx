import axios from "axios";
import React from "react";

const ItemList = ({ id, price, thumbnail, title }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/productos/${id}`)
      .then((response) => {
        alert(response);
        window.location.reload();
      });
  };
  return (
    <tr className="whitespace-nowrap">
      <td className="px-6 py-4 text-sm text-gray-500">{id}</td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">{title}</div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500">
          <img src={thumbnail} alt="not found" width={40} height={40} />
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500">${price}</td>

      <td className="px-6 py-4">
        <button
          href="/"
          onClick={() => handleDelete(id)}
          className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ItemList;
