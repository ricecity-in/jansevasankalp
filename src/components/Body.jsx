import React from 'react';

const Body = () => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="bg-white p-4 text-center shadow-md">
        <h1 className="text-xl font-bold">Empowering Futures Through Education</h1>
        <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Get Involved</button>
      </div>

      {/* Statistics Section */}
      <div className="p-4 text-center">
        <div>Stats Placeholder</div>
      </div>

      {/* Our Story Section */}
      <div className="flex flex-col md:flex-row p-4">
        <div className="md:w-1/2">
          {/* Image would go here */}
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="font-bold">Our Story</h2>
          <p>Details about the organization...</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Read More</button>
        </div>
      </div>

      {/* Programs Section */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">Program 1 Placeholder</div>
          <div className="bg-white p-4 shadow-md">Program 2 Placeholder</div>
          <div className="bg-white p-4 shadow-md">Program 3 Placeholder</div>
        </div>
      </div>

      {/* Unique Value Propositions Section */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">Value 1 Placeholder</div>
          <div className="bg-white p-4 shadow-md">Value 2 Placeholder</div>
          <div className="bg-white p-4 shadow-md">Value 3 Placeholder</div>
        </div>
      </div>

      {/* Journey in Images Section */}
      <div className="p-4">
        <div>Image Gallery Placeholder</div>
      </div>

      {/* Client Stories Section */}
      <div className="p-4">
        <div>Client Stories Placeholder</div>
      </div>
    </div>
  );
};

export default Body;
