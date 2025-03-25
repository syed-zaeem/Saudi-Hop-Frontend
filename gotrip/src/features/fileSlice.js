const apiCall = `http://209.97.137.58:5000/files`;

const getFile = async (fileName) => {
  fileName = fileName.replace(/\\/g, "/").split("/").pop();
  try {
    const response = await fetch(`${apiCall}/${fileName}`);
    if (!response.ok) {
      throw new Error(
        `Error fetching file: ${response.status} ${response.statusText}`
      );
    }
    return await response.blob(); // Assuming the file is being fetched as a binary blob
  } catch (error) {
    console.error("Error fetching file:", error);
    return null;
  }
};

const UploadFiles = {
  getPackageImages: async (packages) => {
    console.log("The packages in upload files are:", packages);
    const imageMap = {};
    const loadingState = {};

    for (const packageItem of packages) {
      if (packageItem.img) {
        loadingState[packageItem._id] = true;
        try {
          const blob = await getFile(packageItem.img);
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
    console.log("After fetching all the images of packages:", imageMap);
    return imageMap;
  },
  getBlogImages: async (blogs) => {
    console.log("The blogs in upload files are:", blogs);
    const imageMap = {};
    const loadingState = {};

    for (const blogItem of blogs) {
      if (blogItem.image) {
        loadingState[blogItem._id] = true;
        try {
          const blob = await getFile(blogItem.image);
          if (blob) {
            const imageURL = URL.createObjectURL(blob);
            imageMap[blogItem._id] = imageURL;
          } else {
            imageMap[blogItem._id] = null;
          }
        } catch (error) {
          console.error(
            `Error fetching image for blog ${blogItem._id}:`,
            error
          );
          imageMap[blogItem._id] = null;
        } finally {
          loadingState[blogItem._id] = false;
        }
      }
    }
    console.log("After fetching all the images of blogs:", imageMap);
    return imageMap;
  },
  getHotelSingleImage: async (hotels) => {
    console.log("The hotels in upload files are:", hotels);
    const imageMap = {};
    const loadingState = {};

    for (const hotelItem of hotels) {
      if (hotelItem.images.length > 0) {
        loadingState[hotelItem._id] = true;
        try {
          const blob = await getFile(hotelItem.images[0]);
          if (blob) {
            const imageURL = URL.createObjectURL(blob);
            imageMap[hotelItem._id] = imageURL;
          } else {
            imageMap[hotelItem._id] = null;
          }
        } catch (error) {
          console.error(
            `Error fetching image for hotel ${hotelItem._id}:`,
            error
          );
          imageMap[hotelItem._id] = null;
        } finally {
          loadingState[hotelItem._id] = false;
        }
      }
    }
    console.log("After fetching all the images of hotels:", imageMap);
    return imageMap;
  },
  getHotelImages: async (hotels) => {
    console.log("The hotels in upload files are:", hotels);
    const imageMap = {};
    const loadingState = {};

    for (const hotelItem of hotels) {
      if (hotelItem.images.length > 0) {
        loadingState[hotelItem._id] = true;
        let imageUrls = [];
        try {
          for (const image of hotelItem.images) {
            const blob = await getFile(image);
            if (blob) {
              const imageURL = URL.createObjectURL(blob);
              imageUrls.push(imageURL);
            }
          }
          imageMap[hotelItem._id] = imageUrls;
        } catch (error) {
          console.error(
            `Error fetching image for hotel ${hotelItem._id}:`,
            error
          );
          imageMap[hotelItem._id] = null;
        } finally {
          loadingState[hotelItem._id] = false;
        }
      }
    }
    console.log("After fetching all the images of hotels:", imageMap);
    return imageMap;
  },
};

export default UploadFiles;
