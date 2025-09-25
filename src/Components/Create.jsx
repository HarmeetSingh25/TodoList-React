import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { textcontext } from "../Wrapper";

const Create = () => {
  const [data, setdata] = useContext(textcontext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(
      // { defaultValues: { Tittle: "" },}
    );

  // Success: form is valid
  const onSubmit = (Data) => {
    const newTodo = {
      ...Data,
      id: nanoid(),
      iscomplete: false,
    };

    setdata((prev) => [...prev, newTodo]);

    toast.success("Todo added to list", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });

    reset();
  };

  // Error: validation failed
  const onError = (errors) => {
    if (errors.Tittle) {
      toast.error(errors.Tittle.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="leading-15 text-5xl text-white">
        Set <span className="text-red-400">Reminder</span> for <br /> Task
      </h1>

      <form
        className="flex gap-2 mt-5 flex-col items-end"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <input
          {...register("Tittle", { required: "Empty todo is not allowed" })}
          className="border-0 outline-0 text-2xl w-150 bg-transparent pt-4 pl-4 pb-0 text-amber-50 rounded-xs"
          type="text"
          placeholder="Enter Todo"
        />

        <hr className="w-full text-amber-50 p-2" />

        {errors?.Tittle?.message && (
          <small className="text-xl text-red-400 w-full">
            {errors.Tittle.message}
          </small>
        )}

        <button
          type="submit"
          className="w-40 bg-transparent border-amber-50 border-1 text-amber-50 py-3 rounded-md text-xl"
        >
          Create Todo
        </button>

      </form>
    </div>
  );
};

export default Create;
