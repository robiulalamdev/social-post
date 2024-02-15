/* eslint-disable @next/next/no-img-element */
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";
import useInputPattern from "@/lib/hooks/useInputPattern";
import { useNewPostMutation } from "@/redux/features/globals/globalApi";

const Home = () => {
  const [newPost, { isLoading }] = useNewPostMutation();

  const { handleSubmit, register, setValue, reset } = useForm();
  const { handleNumber } = useInputPattern();

  const [image, setImage] = useState(null);

  const handleSave = async (data) => {
    const formData = new FormData();
    formData.append(
      "access_token",
      "EAAK97AqeosABO53dwvrkGZBqZA4n7nFdRa17XUE11NT2svwZA0ei8KwZCnZBRLv1McKAWYKZCUZBUmnQXU9MWnZAcUj3q1TdnKZAzJ4e6kyAY3rto4sX3XupX77LuzbU2OZBMDJYZByDTRlk4ZCWMYtdjjj3bEvp1nvUDwn0l4icZANC2pg0SwzyUNyXgzulQWFnEBTIXgA0fBuZAQjIzjxIyTj4F8ajvstnosOLSePn889hgZD"
    );
    formData.append("caption", data?.message);
    if (image) {
      formData.append("source", image);
    }
    const options = {
      message: data?.message,
      data: formData,
    };
    const result = await newPost(options);
    // console.log(result);
    if (result?.data?.id) {
      toast.success("New Post Created");
      setImage(null);
      reset();
    } else {
      toast.error("New Post Create Failed!");
    }
  };

  //   console.log(data);
  return (
    <main className=" w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(handleSave)}
        className="max-w-[400px] w-full mx-auto bg-white h-fit px-3 py-5 rounded-md shadow border"
      >
        <h1 className="font-bold pb-2">Facebook Post</h1>
        <div className="mb-4">
          <span className="block tracking-[0.26px] leading-[16px] text-black text-sm mb-1">
            Message
          </span>
          <textarea
            {...register("message", { required: true })}
            type="text"
            className="w-full h-32 bg-gray-100 outline-none px-2 rounded text-sm py-2"
            placeholder="Enter Message"
            required
          ></textarea>
        </div>
        <div className="">
          <span className="block tracking-[0.26px] leading-[16px] text-black text-sm mb-1">
            Image
          </span>
          <div className="w-full h-[150px] bg-gray-50 relative cursor-pointer flex justify-center items-center">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="object-contain"
              />
            ) : (
              <small>Upload an Image (.png, .jpg, .jpeg)</small>
            )}
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              accept=".png, .jpg, .jpeg"
              multiple={false}
              required={true}
              className="opacity-0 absolute w-full cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-5 col-span-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="flex justify-center items-center gap-2 max-w-[180px] w-full h-10 shadow-none hover:shadow-none rounded bg-primary"
          >
            {isLoading && (
              <SpinnerCircularFixed
                size={25}
                thickness={150}
                speed={450}
                color="white"
                secondaryColor="gray"
              />
            )}
            Post
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Home;
