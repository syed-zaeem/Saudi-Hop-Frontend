import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiStarFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import UploadFiles from "../api/uploadFiles";
import PackageAPI from "../api/Package";

const ManagePackage = () => {
  const [packages, setPackages] = useState([]);
  const [packageImages, setPackageImages] = useState({});
  const [loadingImages, setLoadingImages] = useState({});

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await PackageAPI.getPackages();
        setPackages(data);
        fetchPackageImages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchPackages();
  }, []);

  const fetchPackageImages = async (packages) => {
    const imageMap = {};
    const loadingState = {};

    for (const packageItem of packages) {
      if (packageItem.img) {
        loadingState[packageItem._id] = true;
        try {
          const blob = await UploadFiles.getFile(packageItem.img);
          if (blob) {
            const imageURL = URL.createObjectURL(blob);
            imageMap[packageItem._id] = imageURL;
          } else {
            imageMap[packageItem._id] = null;
          }
        } catch (error) {
          console.error(
            `Error fetching image for package ${packageItem._id}:`,
            error
          );
          imageMap[packageItem._id] = null;
        } finally {
          loadingState[packageItem._id] = false;
        }
      }
    }
    setPackageImages(imageMap);
    setLoadingImages(loadingState);
  };

  const deleteItem = async (_id) => {
    try {
      await PackageAPI.deletePackage(_id);
      setPackages((prev) =>
        prev.filter((packageItem) => packageItem._id !== _id)
      );
    } catch (error) {
      console.error("Error deleting package:", error);
    }
  };

  // Grouping packages by category
  const categorizedPackages = packages.reduce((acc, packageItem) => {
    if (!acc[packageItem.category]) {
      acc[packageItem.category] = [];
    }
    acc[packageItem.category].push(packageItem);
    return acc;
  }, {});

  return (
    <div>
      <div className="main-content p-4">
        <h1 className="text-lg my-2 text-blue-600">
          Dashboard / <span className="text-gray-900">Manage Packages</span>
        </h1>
        <div className="flex flex-row gap-1">
          <input
            type="text"
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Search"
          />
          <Link
            to={"/create/package"}
            className="text-white w-[200px] h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            + Add new package
          </Link>
        </div>

        {/* Category-wise Package Cards */}
        <div className="mt-4">
          {Object.keys(categorizedPackages).map((category) => (
            <div key={category} className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {category} Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorizedPackages[category].map((packageItem) => (
                  <div
                    key={packageItem._id}
                    className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-sm">
                    <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-t-lg overflow-hidden">
                      {loadingImages[packageItem._id] ? (
                        <span className="text-gray-600">Loading...</span>
                      ) : packageImages[packageItem._id] ? (
                        <img
                          className="w-full h-full object-cover"
                          src={packageImages[packageItem._id]}
                          alt={packageItem.title}
                        />
                      ) : (
                        <span className="text-gray-500">
                          No Image Available
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        {packageItem.title}
                      </h5>
                      {packageItem.highlights.map((item, index) => {
                        return <p>{item}</p>;
                      })}

                      <div className="flex items-center justify-between">
                        <span></span>
                        <div className="flex items-center gap-1 text-green-600 font-semibold">
                          <RiMoneyDollarCircleFill size={18} />
                          <span>{packageItem.price} /-</span>
                        </div>
                      </div>
                      <div className="flex w-full gap-2 mt-4">
                        <button
                          onClick={() => deleteItem(packageItem._id)}
                          className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagePackage;
