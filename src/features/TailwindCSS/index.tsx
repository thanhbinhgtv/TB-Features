import React from "react";

const index = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-blue-500 p-4">Phần tử 1</div>
        <div className="bg-green-500 p-4">Phần tử 2</div>
        <div className="bg-red-500 p-4">Phần tử 3</div>
        <div className="bg-yellow-500 p-4">Phần tử 4</div>
      </div>
    </div>
  );
};

export default index;
