import { useState } from "react";
import { FaFileUpload, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { uploadImage } from "@/features/blogSlice";

const BlogsForm = () => {
  const [blogImage, setBlogImage] = useState(null);
  // const [images, setImages] = useState([]);

  // State for the blog form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState([]);

  const dispatch = useDispatch()

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   const newVideos = files.filter(
  //     (file) =>
  //       !videos.some(
  //         (video) => video.name === file.name && video.size === file.size
  //       )
  //   );

  //   if (newVideos.length < files.length) {
  //     alert("Some videos were already uploaded and have been skipped.");
  //   }

  //   setVideos((prevVideos) => [...prevVideos, ...newVideos]);
  // };

  // const handleDelete = (index) => {
  //   setVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
  // };

  const handleBlogImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file only
    console.log("The file selected is: " , file.name)
    if (file) {
      const imagePreview = {
        file,
        preview: URL.createObjectURL(file),
      };
      console.log(imagePreview);
      setBlogImage(imagePreview); // Set the image preview
    }
  };

  const handleBlogImageDelete = () => {
    setBlogImage(null); // Clear the image state when deleted
  };

  // Handle title change
  const handleTitleChange = (e) => setTitle(e.target.value);

  // Handle description change
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSectionImageChange = (e, index) => {
    console.log("The index is: ", index);
    const files = Array.from(e.target.files);
    const file = files[0]

    const newSections = [...sections];

    // Get existing images in the current section
    // const existingImages = newSections[index]?.images || [];

    // Filter out duplicates based on name and size
    // const uniqueImages = files.filter(
    //   (file) =>
    //     !existingImages.some(
    //       (image) =>
    //         image.file.name === file.name && image.file.size === file.size
    //     )
    // );

    // Convert unique files to object URLs for preview
    const imagePreview = {
      file,
      preview: URL.createObjectURL(file),
    };

    // Update the images in the current section
    newSections[index].image = imagePreview;
    console.log("The uploaded image is: " , newSections[index].image.file.name)

    setSections(newSections);

    console.log("The section is now: ", sections);
  };

  const handleSectionImageDelete = (index) => {
    const newSections = [...sections];
    console.log("The edit section is: ", newSections[index]);

    // Revoke the ObjectURL to release memory
    URL.revokeObjectURL(newSections[index].image.preview);

    // Remove the specific image from the images array
    newSections[index].image = null

    // Update the state
    setSections(newSections);
  };

  // Handle section title change
  const handleSectionTitleChange = (index, e) => {
    const newSections = [...sections];
    newSections[index].sectionTitle = e.target.value;
    setSections(newSections);
  };

  // Handle section description change
  const handleSectionDescriptionChange = (index, e) => {
    const newSections = [...sections];
    newSections[index].sectionDescription = e.target.value;
    setSections(newSections);
  };

  // Add new section to the sections array
  const addSection = () => {
    setSections([
      ...sections,
      { sectionTitle: "", sectionDescription: "", images: null },
    ]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    sections.map((section)=>{
      dispatch(uploadImage(section.image.file))
    })

    // const blogData = {
    //   title,
    //   description,
    //   sections,
    //   timestamp: new Date().toISOString(),
    // };
    // console.log("Blog Data:", blogData); // You can send this data to your API
  };

  return (
    <div>
      <div
        className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32"
        style={{ fontFamily: "'Arial', sans-serif" }}
      >
        <div className="col-12">
          <h1 className="text-3xl font-semibold text-gray-800">Add New Blog</h1>
          <div className="text-lg text-gray-600 mb-6">
            Use the form below to add a new blog to the database.
          </div>
        </div>
      </div>

      <div className="blog-form">
        <h2 className="form-heading">Blog Form</h2>
        <form onSubmit={handleSubmit} className="blog-form-content">
          <label className="form-label">Upload Image</label>
          <div className="form-group image-upload">
            <div className="video-upload-section">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="file-upload"
                onChange={handleBlogImageChange}
              />
              <label htmlFor="file-upload" className="upload-label">
                <FaFileUpload size={40} className="icon" />
                <span>
                  {blogImage
                    ? `You have uploaded ${blogImage.file.name}`
                    : "Press or drag image to upload"}
                </span>
              </label>
            </div>

            {blogImage && (
              <div className="uploaded-image-preview" style={{display: 'flex', flexDirection: 'column'}}>
                <img
                  src={blogImage.preview}
                  alt="uploaded"
                  className="image-preview"
                />
                <button
                  onClick={handleBlogImageDelete}
                  className="delete-button"
                  style={{color: 'red'}}
                >
                  <FaTrash />
                </button>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              placeholder="Enter the title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              placeholder="Enter the description"
              rows="4"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>

          <hr />

          <div className="form-group">
            <label
              className="form-label"
              style={{ fontSize: "20px", textAlign: "center" }}
            >
              Sections
            </label>
            {sections.map((section, index) => (
              <div key={index} className="section">
                <div className="form-group">
                  <label
                    htmlFor={`sectionTitle-${index}`}
                    className="form-label"
                  >
                    Section Title
                  </label>
                  <input
                    type="text"
                    id={`sectionTitle-${index}`}
                    name={`sectionTitle-${index}`}
                    className="form-input"
                    placeholder="Enter section title"
                    value={section.sectionTitle}
                    onChange={(e) => handleSectionTitleChange(index, e)}
                  />
                </div>
                <div>
                  <label className="form-label">Upload Images</label>
                  <div className="form-group image-upload">
                    <div className="video-upload-section">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id={`image-upload-${index}`}
                        onChange={(e) => {
                          handleSectionImageChange(e, index);
                        }}
                      />
                      <label
                        htmlFor={`image-upload-${index}`}
                        className="upload-label"
                      >
                        <FaFileUpload size={40} className="icon" />
                        <span>
                          {section.image
                            ? `You have uploaded image`
                            : "Press or drag images to upload"}
                        </span>
                      </label>
                    </div>

                    {section.image && (
                      <div className="uploaded-videos-list">
                        {/* {section.images.map((image, imageIndex) => ( */}
                          <div className="uploaded-video-item">
                            <img
                              src={section.image.preview}
                              alt="Section Image"
                              className="uploaded-image"
                            />
                            <button
                              onClick={() =>
                                handleSectionImageDelete(index)
                              }
                              className="delete-button"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        {/* ))} */}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor={`sectionDescription-${index}`}
                    className="form-label"
                  >
                    Section Description
                  </label>
                  <textarea
                    id={`sectionDescription-${index}`}
                    name={`sectionDescription-${index}`}
                    className="form-textarea"
                    placeholder="Enter section description"
                    rows="4"
                    value={section.sectionDescription}
                    onChange={(e) => handleSectionDescriptionChange(index, e)}
                  ></textarea>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="add-section-button"
              onClick={addSection}
            >
              Add Section
            </button>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="form-button">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogsForm;
