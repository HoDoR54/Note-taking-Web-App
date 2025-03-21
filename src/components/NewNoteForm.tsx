import React, { useState } from "react";
import { noteType } from "../Data/notes";
import { Btn } from "./UI/Button";
import { useNewNoteConext } from "../Contexts/NewFormContext";
import { svgIcons } from "../Data/SVGs";
import { useCurrentNote } from "../Contexts/CurrentNoteContext";
import { useNotes } from "../Contexts/NotesContext";

const NewNoteForm = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [titleInput, setTitleInput] = useState<string>("");
  const [errors, setErrors] = useState<{ title?: string; tags?: string }>({}); // for form validation

  const { modifyNotes } = useNotes();
  const { toggleForm } = useNewNoteConext();
  const { setCurrentNote } = useCurrentNote();

  const closeForm = () => {
    toggleForm(false);
  };

  const handleTagSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // prevent "enter" from submitting the form
    const tagValue = tagInput.trim();
    if (tagList.length >= 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        tags: "A note can have no more than three tags.",
      }));
    } else {
      if (tagValue && !tagList.includes(tagValue)) {
        setTagList((prevTags) => [...prevTags, tagValue]);
        setTagInput("");
        setErrors((prevErrors) => ({ ...prevErrors, tags: undefined }));
      }
    }
  };

  const removeTag = (idx: number) => {
    const newTagList = tagList.filter((_, index) => index !== idx);
    setTagList(newTagList);
  };

  const validateInput = () => {
    let isValid = true;
    const newErrors: { title?: string; tags?: string } = {};

    if (!titleInput) {
      newErrors.title = "Title is required!";
      isValid = false;
    }

    if (tagList.length === 0) {
      newErrors.tags = "At least one tag is required!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleCreate = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = validateInput();
    if (isValid) {
      const newNote: noteType = {
        id: Date.now(),
        title: titleInput,
        tags: tagList,
        note: "",
        status: "active",
        dateTime: new Date(),
        updatedAt: undefined,
      };

      modifyNotes.addNote(newNote);
      closeForm();
      setCurrentNote(newNote);
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
        onChange={(e) => setTitleInput(e.target.value)}
        error={errors.title}
        id="ts-title-input"
        isRequired={true}
      />

      <div>
        <FormInput
          label="Tags"
          placeholder="e.g. breakfast, meat, etc..."
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleTagSubmit(e);
          }}
          error={errors.tags}
          isRequired={false}
        />
      </div>

      <div className="flex gap-3 mb-5">
        {tagList.map((tag, index) => (
          <TagOfNewNote
            key={index}
            tag={tag}
            index={index}
            removeTag={removeTag}
          />
        ))}
      </div>

      <div className="flex gap-3 w-full justify-end">
        <Btn value="Create" type="primary" action="submit" />
        <Btn value="Cancel" type="secondary" handleClick={closeForm} />
      </div>
    </form>
  );
};

interface FormInputProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  error?: string;
  id?: string;
  isRequired: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
  error,
  id,
  isRequired,
}) => {
  return (
    <label className="py-3 block">
      <span className="block text-base mb-2 font-medium">{label}:</span>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-3 py-2 border-solid rounded-md focus:outline-none ${
          error ? "border-red-500 border-2" : "border-gray-300 border"
        }`}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        id={id}
        required={isRequired}
      />
      {error && <span className="text-red-500 font-semibold">{error}</span>}
    </label>
  );
};

const TagOfNewNote: React.FC<{
  tag: string;
  index: number;
  removeTag: (index: number) => void;
}> = ({ tag, index, removeTag }) => {
  return (
    <div className="group px-5 relative border py-1 rounded-full hover:bg-gray-100 border-gray-300 max-w-[10rem] flex items-center justify-center overflow-hidden">
      {tag}
      <div
        onClick={() => removeTag(index)}
        className="absolute cursor-pointer right-0 top-0 bottom-0 bg-gradient-to-l from-white via-white to-transparent hidden group-hover:flex items-center justify-center pr-3 pl-5"
      >
        {svgIcons.closeSvg}
      </div>
    </div>
  );
};

export default NewNoteForm;
