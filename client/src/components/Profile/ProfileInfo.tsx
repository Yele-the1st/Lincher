import Image from "next/image";
import { FC, useState } from "react";

interface ProfileInfoProps {
  avatar: string | null;
  user: any;
}

const ProfileInfo: FC<ProfileInfoProps> = ({ avatar, user }) => {
  const [name, setname] = useState(user && user.name);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploading, setUploading] = useState(false); // State to track upload status

  const imageHandler = async (e: any) => {
    console.log("hhh");
  };

  const handleSubmit = async (e: any) => {
    console.log("submit");
  };

  return (
    <div className="">
      <div className=" w-full flex justify-center">
        <div className=" w-full relative">
          {/* <div className=" flex flex-col w-full mb-[24px] ">
            <h2 className=" dark:text-background-foregroundD text-background-foregroundL mb-[12px] text-center text-[22px] leading-[28px] font-semibold">
              Account Settings
            </h2>
            <p className=" text-[15px] text-center leading-[20px] dark:text-background-foregroundD text-background-foregroundL">
              Set your preferred account details to ensure you always receive a
              personalized experience with us.
            </p>
          </div> */}

          {/* profile picture */}
          <div className=" mb-[24px] rounded-[16px] border p-[24px] dark:text-background-foregroundD text-background-foregroundL  w-full  bg-background dark:bg-background-dark bg-opacity-90 dark:border-[#1E1E1E] border-[rgb(232,237,241)]">
            <div className=" w-full">
              <h3 className=" w-full mb-[24px] text-center md:text-start text-[18px] font-semibold leading-[20px]">
                Profile Picture
              </h3>
            </div>

            <div className=" gap-4 items-center flex flex-col md:flex-row w-full">
              <div className="">
                {uploading ? (
                  // Display a loader while uploading
                  <p>uploading...</p>
                ) : uploadedFile ? (
                  // Display the uploaded image
                  <Image
                    src={URL.createObjectURL(uploadedFile)}
                    width={120}
                    height={120}
                    className="shrink-0 rounded-full"
                    alt=""
                  />
                ) : (
                  // Display user's current profile picture
                  <>
                    {user?.avatar && (
                      <Image
                        src={user?.avatar?.url}
                        width={120}
                        height={120}
                        className="shrink-0 rounded-full"
                        alt=""
                      />
                    )}
                  </>
                )}
                {/* {!uploadError && <p className="text-red-500">{uploadError}</p>} */}
              </div>
              <div className=" w-full ">
                <p className=" text-[15px] mb-[12px] text-center md:text-left leading-[20px]">
                  Brighten up your profile with a favorite photo or avatar. 1 MB
                  maximum file size
                </p>
                <div className=" hidden md:flex mb-[12px] ">
                  <div className=" gap-[8px] flex items-start w-full">
                    <div className="cursor-pointer w-auto ">
                      <input
                        type="file"
                        accept="image/*"
                        id="profileImage"
                        style={{ display: "none" }}
                      />
                      <label htmlFor="profileImage">
                        <div className="cursor-pointer h-[44px] rounded-[3px] px-4 inline-flex justify-between items-center text-center max-w-full bg-[rgb(245,247,249)] shadow mb-[24px] w-auto text-[15px] font-medium ">
                          <div className=" align-middle h-full flex justify-between items-center">
                            <div className=" text-black flex items-center">
                              Upload
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className=" cursor-pointer w-auto ">
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
                      accept="image/*"
                      id="profileImage"
                      style={{ display: "none" }}
                    />
                    <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)] shadow mb-[24px]  text-[15px] font-medium ">
                      <div className=" align-middle h-full flex justify-between items-center">
                        <div className=" text-black flex items-center">
                          Upload
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" cursor-pointer w-full ">
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
          </div>

          {/* change Password */}
          <div className=" mb-[24px] w-full relative">
            <div className=" rounded-[16px] border p-[24px] w-full bg-background dark:bg-background-dark bg-opacity-90 dark:border-[#1E1E1E] border-[rgb(232,237,241)]">
              <div className=" w-full dark:text-background-foregroundD text-background-foregroundL">
                <h3 className=" w-full mb-[24px] text-center md:text-start text-[18px] font-semibold leading-[20px]">
                  Change Password
                </h3>
              </div>
              <div className=" gap-3 block md:flex items-center ">
                <div className=" flex flex-1 w-full">
                  <div className=" rounded-[8px] flex w-full items-center justify-between relative h-[44px] border dark:border-[#1E1E1E] border-[rgb(232,237,241)] text-[rgb(79,94,113)] cursor-not-allowed  ">
                    <input
                      className=" w-full rounded-[8px] px-[12px] h-full dark:bg-background-darkHover "
                      placeholder={
                        user?.email && user.email.length > 10
                          ? `${user.email.slice(0, 16)}...`
                          : user?.email
                      }
                    />
                  </div>
                </div>
                <button className=" cursor-pointer mt-3 md:mt-0 w-full md:w-auto ">
                  <button className="w-full">
                    <div className=" w-full h-[44px] rounded-[3px] px-4 inline-flex justify-center items-center text-center max-w-full bg-[rgb(245,247,249)] shadow  text-[15px] font-medium ">
                      <div className=" align-middle h-full flex justify-between items-center">
                        <div className=" text-black flex items-center">
                          Add Password
                        </div>
                      </div>
                    </div>
                  </button>
                </button>
              </div>
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

                <div className=" cursor-pointer mt-3 md:mt-0 w-full md:w-auto ">
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
      </div>
    </div>
  );
};

export default ProfileInfo;
