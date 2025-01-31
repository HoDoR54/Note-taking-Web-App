import React, { useContext, useState } from "react";
import { svgIcons } from "../Data/SVGs";
import { Btn } from "./UI/Button";
import { NewNoteContext } from "../Contexts/NewFormContext";
import { noteType } from "../Data/notes";
import { NotesContext } from "../Contexts/NotesContext";

const NewNoteForm = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [titleInput, setTitleInput] = useState<string>("");
  const context = useContext(NewNoteContext);
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    throw new Error("the app must be nested within a notes provider.");
  }

  if (!context) {
    throw new Error("NewNoteForm must be used within a NewNoteContextProvider");
  }

  const { modifyNotes } = notesContext;
  const { toggleForm } = context;

  const closeForm = () => {
    toggleForm(false);
  };

  const handleTagInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  const handleTitleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitleInput(event.target.value);
  };

  const handleTagSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const tagValue = tagInput.trim();
    if (tagList.length >= 3) {
      alert("a note must have no more than three tags.");
    } else {
      if (tagValue && !tagList.includes(tagValue)) {
        setTagList((prevTags) => [...prevTags, tagValue]);
        setTagInput("");
      }
    }
  };

  const validateInput = () => {
    let isValid: boolean = true;
    if (tagList.length === 0) {
      alert("there must be a tag for a note!");
      isValid = false;
    }
    if (titleInput === null) {
      alert("your title is empty!");
      isValid = false;
    }
    return isValid;
  };

  const handleCreate = () => {
    const isValid = validateInput();
    if (isValid) {
      const newNote: noteType = {
        title: titleInput,
        tags: tagList,
        note: "",
        status: "active",
        dateTime: new Date(),
      };
      modifyNotes.addNote(newNote);
      closeForm();
    }
  };

  return (
    <form
      className="bg-white rounded-md flex flex-col min-w-[30vw] px-5 py-3 z-100 absolute left-1/2 max-h-screen top-1/2 transform -translate-x-[50%] -translate-y-[50%]"
      onSubmit={handleCreate}
    >
      <h2 className="text-xl font-semibold">Create a new note</h2>

      <FormInput
        label="Title"
        placeholder="e.g. Making a sandwich"
        value={titleInput}
        onChange={handleTitleInputChange}
      />

      <div>
        <FormInput
          label="Tags"
          placeholder="e.g. breakfast, meat, etc..."
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleTagSubmit(e);
          }}
          id="js-tag-input"
        />
      </div>

      <div className="flex gap-3 mb-5">
        {tagList.map((tag, index) => (
          <TagOfNewNote key={index} tag={tag} />
        ))}
      </div>

      <div className="flex gap-3 w-full justify-end">
        <Btn value="Create" type="primary" handleClick={handleCreate} />
        <Btn value="Cancel" type="secondary" handleClick={closeForm} />
      </div>
    </form>
  );
};

export default NewNoteForm;

interface TagOfNewNoteProps {
  tag: string;
}

const TagOfNewNote: React.FC<TagOfNewNoteProps> = ({ tag }) => {
  return (
    <div className="group px-5 relative border py-1 rounded-full hover:bg-gray-100 border-gray-300 max-w-[10rem] flex items-center justify-center overflow-hidden">
      {tag}
      <div className="absolute cursor-pointer right-0 top-0 bottom-0 bg-gradient-to-l from-white via-white to-transparent hidden group-hover:flex items-center justify-center pr-3 pl-5">
        {svgIcons.closeSvg}
      </div>
    </div>
  );
};

interface FormInputProps {
  label: string;
  placeholder: string;
  id?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  id,
  onChange,
  onKeyDown,
}) => {
  return (
    <label className="py-3 block">
      <span className="block text-base mb-2 font-medium">{label}:</span>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-3 py-2 border-solid rounded-md focus:outline-none ${
          value ? "border-green-400 border-2" : "border-gray-300 border"
        }`}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        id={id}
      />
    </label>
  );
};
