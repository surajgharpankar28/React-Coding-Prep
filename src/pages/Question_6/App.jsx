import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useForm, Controller } from "react-hook-form";

function App() {
  const [fields, setFields] = useState(
    JSON.parse(localStorage.getItem("formFields")) || []
  );
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    localStorage.setItem("formFields", JSON.stringify(fields));
  }, [fields]);

  const handleAddField = (type) => {
    const newField = {
      id: new Date().getTime().toString(),
      type,
      label: `${type} Field`,
      options: type === "dropdown" ? ["Option 1", "Option 2"] : [],
    };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    const reorderedFields = Array.from(fields);
    const [movedItem] = reorderedFields.splice(source.index, 1);
    reorderedFields.splice(destination.index, 0, movedItem);
    setFields(reorderedFields);
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-8 mt-12 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Dynamic Form Builder
      </h1>

      <div className="mb-6 flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => handleAddField("text")}
        >
          Add Text Field
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={() => handleAddField("email")}
        >
          Add Email Field
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          onClick={() => handleAddField("dropdown")}
        >
          Add Dropdown
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          onClick={() => handleAddField("checkbox")}
        >
          Add Checkbox
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {fields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <div
                      className="mb-4 p-4 bg-gray-100 rounded-lg flex justify-between items-center"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="flex-1">
                        <label className="block text-lg font-medium">
                          {field.label}
                        </label>
                        <button
                          className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                          onClick={() => handleRemoveField(field.id)}
                        >
                          Remove
                        </button>
                      </div>
                      <Controller
                        control={control}
                        name={field.id}
                        render={({ field }) => (
                          <>
                            {field.type === "text" && (
                              <input
                                {...field}
                                type="text"
                                placeholder="Enter text"
                                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                              />
                            )}
                            {field.type === "email" && (
                              <input
                                {...field}
                                type="email"
                                placeholder="Enter email"
                                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                              />
                            )}
                            {field.type === "dropdown" && (
                              <select
                                {...field}
                                className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                              >
                                {field.options.map((option, i) => (
                                  <option key={i} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            )}
                            {field.type === "checkbox" && (
                              <input
                                {...field}
                                type="checkbox"
                                className="mt-2"
                              />
                            )}
                          </>
                        )}
                      />
                      {errors[field.id] && (
                        <span className="text-red-500 text-sm">
                          {errors[field.id]?.message}
                        </span>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 w-full"
        >
          Submit
        </button>
      </form>

      <h3 className="mt-6 text-xl font-semibold">Form Preview:</h3>
      <div className="mt-4">
        {fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block text-lg font-medium">{field.label}</label>
            <div className="mt-2">
              {field.type === "text" && (
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              )}
              {field.type === "email" && (
                <input
                  type="email"
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              )}
              {field.type === "dropdown" && (
                <select className="p-2 border border-gray-300 rounded-md w-full">
                  {field.options.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              )}
              {field.type === "checkbox" && <input type="checkbox" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
