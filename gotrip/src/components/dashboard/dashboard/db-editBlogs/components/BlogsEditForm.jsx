import { useState } from "react";
import { FaFileUpload, FaTrash } from "react-icons/fa";

const BlogsEditForm = () => {
  const [images, setImages] = useState([]);
  
    // State for the blog form fields
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [sections, setSections] = useState([
      { sectionTitle: "", sectionDescription: "" },
    ]);
  
    const handleImageChange = (e) => {
      const files = Array.from(e.target.files);
  
      // Filter only new images that are not already uploaded
      const uniqueImages = files.filter(
        (file) =>
          !images.some(
            (image) =>
              image.file.name === file.name && image.file.size === file.size
          )
      );
  
      if (uniqueImages.length < files.length) {
        alert("Some images are already uploaded and have been skipped.");
      }
  
      // Convert unique files to object URLs for preview
      const imagePreviews = uniqueImages.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
  
      // Update the state with only unique images
      setImages((prevImages) => [...prevImages, ...imagePreviews]);
    };
  
    const handleDelete = (index) => {
      setImages((prevImages) => {
        // Revoke the URL to release memory
        URL.revokeObjectURL(prevImages[index].preview);
        return prevImages.filter((_, i) => i !== index);
      });
    };
  
    // Handle title change
    const handleTitleChange = (e) => setTitle(e.target.value);
  
    // Handle description change
    const handleDescriptionChange = (e) => setDescription(e.target.value);
  
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
      setSections([...sections, { sectionTitle: "", sectionDescription: "" }]);
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      const blogData = {
        title,
        description,
        sections,
        timestamp: new Date().toISOString(),
      };
      console.log("Blog Data:", blogData); // You can send this data to your API
    };
  
    return (
      <div>
        <div
          className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32"
          style={{ fontFamily: "'Arial', sans-serif" }}
        >
          <div className="col-12">
            <h1 className="text-3xl font-semibold text-gray-800">Edit Blog</h1>
            <div className="text-lg text-gray-600 mb-6">
            Make the changes in following form to edit the details of Blog.
            </div>
          </div>
        </div>
  
        <div className="blog-form">
          <h2 className="form-heading">Blog Form</h2>
          <form onSubmit={handleSubmit} className="blog-form-content">
            <div>
              <label className="form-label">Upload Images</label>
              <div className="form-group image-upload">
                <div className="video-upload-section">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                    multiple
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image-upload" className="upload-label">
                    <FaFileUpload size={40} className="icon" />
                    <span>
                      {images.length > 0
                        ? `You have uploaded ${images.length} image(s)`
                        : "Press or drag images to upload"}
                    </span>
                  </label>
                </div>
  
                {images.length > 0 && (
                  <div className="uploaded-videos-list">
                    {images.map((image, index) => (
                      <div key={index} className="uploaded-video-item">
                        <img
                          src={image.preview}
                          alt={image.file.name}
                          className="uploaded-image"
                        />
                        <button
                          onClick={() => handleDelete(index)}
                          className="delete-button"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
              <label className="form-label" style={{fontSize: '20px', textAlign: 'center'}}>Sections</label>
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
                          id="image-upload"
                          multiple
                          onChange={handleImageChange}
                        />
                        <label htmlFor="image-upload" className="upload-label">
                          <FaFileUpload size={40} className="icon" />
                          <span>
                            {images.length > 0
                              ? `You have uploaded ${images.length} image(s)`
                              : "Press or drag images to upload"}
                          </span>
                        </label>
                      </div>
  
                      {images.length > 0 && (
                        <div className="uploaded-videos-list">
                          {images.map((image, index) => (
                            <div key={index} className="uploaded-video-item">
                              <img
                                src={image.preview}
                                alt={image.file.name}
                                className="uploaded-image"
                              />
                              <button
                                onClick={() => handleDelete(index)}
                                className="delete-button"
                              >
                                <FaTrash />
                              </button>
                            </div>
                          ))}
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
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default BlogsEditForm
