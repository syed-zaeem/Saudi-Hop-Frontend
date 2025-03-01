import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { createPost } from "../api/blog";
import { useNavigate } from "react-router-dom";

// Custom component for each paragraph with its own editor and delete button
const ParagraphEditor = ({ content, onChange, onDelete, index, provided }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => onChange(index, editor.getHTML()),
  });

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="mb-4 p-2 border border-gray-200 rounded-lg bg-white flex items-center">
      <span className="mr-2 text-gray-500 cursor-move">☰</span>
      <div className="flex-1">
        <div className="flex gap-2 mb-2 justify-between">
          <div className="flex flex-row gap-1">
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={`px-2 py-1 rounded ${
                editor?.isActive("bold")
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}>
              B
            </button>
            <button
              type="button"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={`px-2 py-1 rounded ${
                editor?.isActive("italic")
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}>
              I
            </button>
          </div>
          <button
            type="button"
            onClick={() => onDelete(index)}
            className="rounded bg-red-200 text-red px-3 py-0 text-sm hover:bg-red-600 hover:text-white">
            x
          </button>
        </div>
        <EditorContent editor={editor} className="border rounded-lg p-2" />
      </div>
    </div>
  );
};

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [paragraphs, setParagraphs] = useState([{ id: "para-1", content: "" }]);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Handle adding a new paragraph
  const handleAddParagraph = () => {
    setParagraphs([
      ...paragraphs,
      { id: `para-${paragraphs.length + 1}`, content: "" },
    ]);
  };

  // Handle deleting a paragraph
  const handleDeleteParagraph = (index) => {
    if (paragraphs.length === 1) {
      // Prevent deleting the last paragraph to keep at least one
      return;
    }
    setParagraphs(paragraphs.filter((_, i) => i !== index));
  };

  // Handle drag-and-drop reordering
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(paragraphs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setParagraphs(items);
  };

  // Handle paragraph content change
  const handleParagraphChange = (index, content) => {
    const updatedParagraphs = [...paragraphs];
    updatedParagraphs[index].content = content;
    setParagraphs(updatedParagraphs);
  };

  // Handle adding a tag
  const handleAddTag = (e) => {
    e.preventDefault();
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  // Handle removing a tag
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title: title || "Untitled Blog Post",
      paragraphs: paragraphs.map((para) => ({
        id: para.id,
        content: para.content || "<p></p>",
      })),
      tags: tags.length > 0 ? tags : [],
      image: imageFile,
      createdAt: new Date().toISOString(),
    };

    const result = await createPost(blogData);
    console.log(result);
    // Reset form
    setTitle("");
    setParagraphs([{ id: "para-1", content: "" }]);
    setTags([]);
    setNewTag("");
    setImage(null);
    setImageFile(null);
    navigate("/manage-blogs");
  };

  return (
    <div className="main-content  p-4">
      <h1 className="text-lg my-2 text-blue-600">
        Dashboard / <span className="text-gray-900">Post New Blog</span>{" "}
      </h1>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side: Editing Form */}
          <div className="lg:w-1/2 space-y-6 overflow-y-auto max-h-screen">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    onChange={handleImageUpload}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-900">
                  Blog Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your blog title"
                />
              </div>

              {/* Paragraphs */}
              <div>
                <div className="flex flex-row justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-900">
                    Blog Content
                  </label>
                  <button
                    type="button"
                    onClick={handleAddParagraph}
                    className="bg-blue-700 text-white px-4 py-1 rounded-lg hover:bg-blue-800">
                    Add Paragraph
                  </button>
                </div>
                <DragDropContext onDragEnd={handleDragEnd}>
                  <Droppable droppableId="paragraphs">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {paragraphs.map((para, index) => (
                          <Draggable
                            key={para.id}
                            draggableId={para.id}
                            index={index}>
                            {(provided) => (
                              <ParagraphEditor
                                content={para.content}
                                onChange={handleParagraphChange}
                                onDelete={handleDeleteParagraph}
                                index={index}
                                provided={provided}
                              />
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Tags
                </label>
                <div className="flex items-center mt-1">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="block w-full p-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add a tag"
                  />
                  <button
                    type="button"
                    onClick={handleAddTag}
                    className="ml-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                    Add
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded flex items-center">
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 text-red-600 hover:text-red-800">
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2.5 px-5 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Create Blog Post
              </button>
            </form>
          </div>

          {/* Right Side: Preview */}
          <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Image */}
            {image ? (
              <img
                src={image}
                alt="Blog Cover"
                className="w-full max-h-64 object-cover rounded-lg mb-6 shadow-md"
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center text-gray-500">
                No image uploaded
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
              {title || "Your Blog Title"}
            </h1>

            {/* Paragraphs */}
            <div className="prose max-w-none">
              {paragraphs.map((para, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html:
                      para.content || "<p>Start typing your paragraph...</p>",
                  }}
                  className="mb-4"
                />
              ))}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700">Tags:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
