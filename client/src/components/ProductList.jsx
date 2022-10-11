import React, { useState } from "react";
import UseFetchData from "../Utils/UseFetchData";
import FormModal from "./FormModal";
import ItemList from "./ItemList";

const ProductList = () => {
  const { data, loading } = UseFetchData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="container flex justify-center mx-auto">
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="flex flex-col">
            <div className="w-full">
              <div className="border-b border-gray-200 shadow">
                <table className="divide-y divide-gray-300 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-2 text-xs text-gray-500">ID</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Nombre
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Thumbanil
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Precio
                      </th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Borrar
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    {data.map((item, idx) => {
                      return (
                        <ItemList
                          key={idx + item.id}
                          price={item.price}
                          thumbnail={item.thumbnail}
                          title={item.title}
                          id={item.id}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Agregar item
      </button>
      {isModalOpen && <FormModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default ProductList;
