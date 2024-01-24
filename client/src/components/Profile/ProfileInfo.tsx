"use client";

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import {
  useDeletePictureMutation,
  useUpdateAvatarMutation,
  useUpdatePasswordMutation,
} from "@/redux/features/user/userApi";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import PersonalDetail from "./PersonalDetail";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import toast from "react-hot-toast";

interface ProfileInfoProps {
  avatar: string | null;
  user: any;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ avatar, user }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [entered, setEntered] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<null | ArrayBuffer | string>(
    null
  );
  const [updatePassword, { isSuccess: passwordSuccess, error: passwordError }] =
    useUpdatePasswordMutation();
  const [updateAvatar, { isLoading, isSuccess, error }] =
    useUpdateAvatarMutation();
  const [
    deletePicture,
    { isLoading: deleteLoading, isSuccess: deleteSuccessful },
  ] = useDeletePictureMutation();
  const { isLoading: meLoading, refetch } = useLoadUserQuery(undefined);

  const imageHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    // Check if files exist and are not empty
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      // Ensure the selected file is of type Blob
      if (selectedFile instanceof Blob) {
        fileReader.onload = () => {
          if (fileReader.readyState === 2) {
            const avatar = fileReader.result as string;
            updateAvatar(avatar);
          }
        };
        // setUploadedFile(file);
        fileReader.readAsDataURL(selectedFile);
      } else {
        console.error("Selected file is not a Blob");
      }
    }
  };

  const handleDeleteButtonClick = () => {
    deletePicture();
    // Handle delete logic here, e.g., reset the avatar
  };

  useEffect(() => {
    if (isSuccess || deleteSuccessful) {
      refetch();
    }
    if (error) {
      console.log(error);
    }
  }, [isSuccess, deleteSuccessful, error, refetch]);

  const passwordChangeHandler = async () => {
    const passwordRegex = /^.{6,}$/;

    if (!passwordRegex.test(newPassword)) {
      toast.error("Password should be more than 6 digit");
    } else {
      await updatePassword({ oldPassword, newPassword });
    }
  };

  useEffect(() => {
    if (passwordSuccess) {
      toast.success("Password Changed Successfully");
      setOldPassword("");
      setNewPassword("");
      setEntered(1);
    }
    if (passwordError) {
      if ("data" in passwordError) {
        const errorData = passwordError as any;
        toast.error(errorData.data.message);
      }
    }
  }, [passwordSuccess, passwordError]);

  return (
    <div className="">
      <div className=" w-full flex justify-center">
        <div className=" w-full relative">
          {/* profile picture */}
          <div className=" mb-[24px] rounded-[16px] border p-[24px] dark:text-background-foregroundD text-background-foregroundL  w-full  bg-background dark:bg-background-dark bg-opacity-90 dark:border-[#1E1E1E] border-[rgb(232,237,241)]">
            <div className=" w-full">
              <h3 className=" w-full mb-[24px] text-center md:text-start text-[18px] font-semibold leading-[20px]">
                Profile Picture
              </h3>
            </div>

            <div className=" gap-4 w-full items-center flex flex-col md:flex-row">
              {isLoading || deleteLoading || meLoading ? (
                // Display a loader while uploading
                <div className=" animate-pulse shrink-0 w-32 h-32 bg-accent dark:bg-background-darkHover rounded-full" />
              ) : uploadedFile ? (
                // Display the uploaded image
                <div className=" shrink-0 w-32 h-32 ">
                  <Image
                    src={URL.createObjectURL(uploadedFile as unknown as Blob)}
                    width={120}
                    height={120}
                    className=" object-cover overflow-hidden rounded-full"
                    alt=""
                  />
                </div>
              ) : (
                // Display user's current profile picture
                <>
                  {user?.avatar && user?.avatar?.url ? (
                    <div className=" shrink-0 w-32 h-32 ">
                      <Image
                        src={user?.avatar?.url}
                        width={120}
                        height={120}
                        className=" object-cover w-full h-full overflow-hidden rounded-full"
                        alt=""
                      />
                    </div>
                  ) : (
                    <PiUserCircleFill className="cursor-pointer h-28 w-28 dark:text-background-foregroundD text-background-foregroundL " />
                  )}
                </>
              )}

              <div className=" w-full ">
                <p className=" text-[15px] mb-[12px] text-center md:text-left leading-[20px]">
                  Brighten up your profile with a favorite photo or avatar. 10
                  MB maximum file size
                </p>
                <div className=" hidden md:flex mb-[12px] ">
                  <div className=" gap-[8px] flex items-start w-full">
                    <div className="cursor-pointer w-auto ">
                      <input
                        type="file"
                        name=""
                        accept="image/png,image/jpeg,image/jpg,image/webp"
                        id="avatar"
                        style={{ display: "none" }}
                        onChange={imageHandler}
                      />
                      <label htmlFor="avatar">
                        <div className="cursor-pointer h-[44px] rounded-[3px] px-4 inline-flex justify-between items-center text-center max-w-full bg-[rgb(245,247,249)] shadow mb-[24px] w-auto text-[15px] font-medium ">
                          <div className=" align-middle h-full flex justify-between items-center">
                            <div className=" text-black flex items-center">
                              Upload
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div
                      onClick={handleDeleteButtonClick}
                      className=" cursor-pointer w-auto "
                    >
                      <button>
                        <div className=" h-[44px] rounded-[3px] px-4 inline-flex justify-between items-center text-center max-w-full shadow bg-[rgb(250,234,234)] mb-[24px] w-auto text-[15px] font-medium ">
                          <div className=" align-middle h-full flex justify-between items-center">
                            <div className=" text-red-800 flex items-center">
                              Delete
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" md:hidden mt-[12px] ">
                <div className=" gap-[16px] flex items-center justify-center w-full">
                  <div className=" cursor-pointer w-full ">
                    <input
                      type="file"
                      accept="image/*,"
                      id="avatar"
                      style={{ display: "none" }}
                      onChange={imageHandler}
                    />
                    <label htmlFor="avatar">
                      <div className=" cursor-pointer w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)] shadow mb-[24px]  text-[15px] font-medium ">
                        <div className=" align-middle h-full flex justify-between items-center">
                          <div className=" text-black flex items-center">
                            Upload
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div
                    onClick={handleDeleteButtonClick}
                    className=" cursor-pointer w-full "
                  >
                    <button className="w-full">
                      <div className=" h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full shadow bg-[rgb(250,234,234)] mb-[24px] w-full text-[15px] font-medium ">
                        <div className=" align-middle h-full flex justify-between items-center">
                          <div className=" text-red-800 flex items-center">
                            Delete
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {error && (
              <div className="text-red-800 mt-2 text-sm">
                <div className="bg-[rgb(250,234,234)] px-4 py-1 rounded-xl max-w-max">
                  {/* @ts-ignore */}
                  <p>{error?.data?.message}</p>
                </div>
              </div>
            )}
          </div>

          {/* change Password */}
          <div className=" mb-[24px] w-full relative">
            <div className=" rounded-[16px] border p-[24px] w-full bg-background dark:bg-background-dark bg-opacity-90 dark:border-[#1E1E1E] border-[rgb(232,237,241)]">
              <div className=" w-full dark:text-background-foregroundD text-background-foregroundL">
                <h3 className=" w-full mb-[24px] text-center md:text-start text-[18px] font-semibold leading-[20px]">
                  Change Password
                </h3>
              </div>
              {entered === 1 && (
                <div className=" gap-3 block md:flex items-center ">
                  <div className=" flex flex-1 w-full">
                    <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                      <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                        <BiSolidLockAlt className=" h-5 w-5" />
                      </span>

                      <input
                        className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                        placeholder="Old Password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        id="oldPassword"
                        required
                        type={!show ? "password" : "text"}
                      />
                      {!show ? (
                        <span
                          onClick={() => setShow(true)}
                          className="flex cursor-pointer dark:text-background-foregroundD select-none items-center px-3 text-gray-900"
                        >
                          <FaEye className=" h-5 w-5" />
                        </span>
                      ) : (
                        <span
                          onClick={() => setShow(false)}
                          className="flex select-none dark:text-background-foregroundD cursor-pointer items-center px-3 text-gray-900"
                        >
                          <FaEyeSlash className=" h-5 w-5" />
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setEntered(2)}
                    className=" cursor-pointer mt-3 md:mt-0 w-full md:w-auto "
                  >
                    <div className="w-full">
                      <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)] shadow  text-[15px] font-medium ">
                        <div className=" align-middle h-full flex justify-between items-center">
                          <div className=" text-black flex items-center">
                            Next
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              )}

              {entered === 2 && (
                <div className=" mt-3 gap-3 block md:flex items-center ">
                  <div className=" flex flex-1 w-full">
                    <div className=" rounded-md flex w-full items-center justify-between relative h-[44px] dark:bg-background-darkHover border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] shadow-sm ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-not-allowed  ">
                      <span className="flex select-none items-center px-3 dark:text-background-foregroundD text-gray-900">
                        <BiSolidLockAlt className=" h-5 w-5" />
                      </span>

                      <input
                        className=" w-full rounded-[8px] bg-transparent px-[12px] h-full block flex-1 border-0 py-1.5 pl-1 text-gray-900 dark:text-white outline-none  placeholder:text-gray-400 focus:ring-0 sm:leading-6  "
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        id="newPassword"
                        required
                        type={!show ? "password" : "text"}
                      />
                      {!show ? (
                        <span
                          onClick={() => setShow(true)}
                          className="flex cursor-pointer dark:text-background-foregroundD select-none items-center px-3 text-gray-900"
                        >
                          <FaEye className=" h-5 w-5" />
                        </span>
                      ) : (
                        <span
                          onClick={() => setShow(false)}
                          className="flex select-none dark:text-background-foregroundD cursor-pointer items-center px-3 text-gray-900"
                        >
                          <FaEyeSlash className=" h-5 w-5" />
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setEntered(1)}
                    className=" cursor-pointer mt-3 md:mt-0 w-full md:w-auto "
                  >
                    <div className="w-full">
                      <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)]/60 shadow  text-[15px] font-medium ">
                        <div className=" align-middle h-full flex justify-between items-center">
                          <div className=" text-black flex items-center">
                            Back
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={passwordChangeHandler}
                    className=" cursor-pointer mt-3 md:mt-0 w-full md:w-auto "
                  >
                    <div className="w-full">
                      <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)] shadow  text-[15px] font-medium ">
                        <div className=" align-middle h-full flex justify-between items-center">
                          <div className=" text-black flex items-center">
                            Change
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* change name */}
          <div className=" mb-[24px] w-full relative">
            <div className=" rounded-[16px] border p-[24px] w-full bg-background dark:bg-background-dark bg-opacity-90 dark:border-[#1E1E1E] border-[rgb(232,237,241)]">
              <div className=" w-full dark:text-background-foregroundD text-background-foregroundL">
                <h3 className=" w-full mb-[24px] text-center md:text-start text-[18px] font-semibold leading-[20px]">
                  Personal Details
                </h3>
              </div>
              <div className=" gap-3 block md:flex items-center ">
                <div className=" w-full">
                  <div className="text-[15px] text-center md:text-left font-normal text-ellipsis leading-[20px] dark:text-background-foregroundD text-background-foregroundL ">
                    {user?.name}
                  </div>
                  <p className=" text-[15px] flex flex-1 mb-[12px] text-center md:text-left  dark:text-background-foregroundD text-background-foregroundL leading-[20px]">
                    Complete your profile for better recommendations
                  </p>
                </div>

                <div
                  onClick={() => setOpen(true)}
                  className=" cursor-pointer mt-3 md:mt-0 w-full md:w-auto "
                >
                  <button className="w-full" type="button">
                    <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)] shadow mb-[24px]  text-[15px] font-medium ">
                      <div className=" align-middle h-full flex justify-between items-center">
                        <div className=" text-black flex items-center">
                          Edit
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className=" mb-[24px] w-full relative">
            <div className=" rounded-[16px] border p-[24px] w-full bg-background dark:bg-background-dark bg-opacity-90 dark:border-[#1E1E1E] border-[rgb(232,237,241)]">
              <div className=" w-full dark:text-background-foregroundD text-background-foregroundL">
                <h3 className=" w-full mb-[24px] text-center md:text-start text-[18px] font-semibold leading-[20px]">
                  Check our Privacy Policy
                </h3>
              </div>
              <div className=" gap-3 block md:flex items-center ">
                <div className=" w-full">
                  <div className="text-[15px] text-center md:text-left font-normal text-ellipsis leading-[20px] dark:text-background-foregroundD text-background-foregroundL ">
                    Learn more about how we use and protect your personal data
                    in our{" "}
                    <strong className=" underline underline-offset-2">
                      Privacy Policy.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mb-[24px] w-full relative">
            <div className=" rounded-[16px] border p-[24px] w-full bg-background dark:bg-background-dark bg-opacity-90 dark:border-[#1E1E1E] border-[rgb(232,237,241)]">
              <div className=" w-full dark:text-background-foregroundD text-background-foregroundL">
                <h3 className=" w-full mb-[24px] text-center md:text-start text-[18px] font-semibold leading-[20px]">
                  Delete your account
                </h3>
              </div>
              <div className=" gap-3 block md:flex items-center ">
                <div className=" w-full">
                  <p className=" text-[15px] flex flex-1 mb-[12px] text-center md:text-left  dark:text-background-foregroundD text-background-foregroundL leading-[20px]">
                    Request to delete your account and data, based on applicable
                    law and our policies.
                  </p>
                </div>

                <div className=" cursor-pointer mt-3 md:mt-0 w-full md:w-auto ">
                  <button className="w-full" type="button">
                    <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(250,234,234)] shadow mb-[24px]  text-[15px] font-medium ">
                      <div className=" align-middle h-full flex justify-between items-center">
                        <div className=" text-red-800  whitespace-nowrap flex items-center">
                          Delete account
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && (
          <PersonalDetail
            setOpen={setOpen}
            email={user?.email}
            name={user?.name}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
