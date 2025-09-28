import { useState } from "react";

const AvatarUploader = ({
  avatar,
  setAvatar,
  avatarError,
  setAvatarError,
}: {
  avatar: File | null;
  setAvatar: React.Dispatch<React.SetStateAction<File | null>>;
  avatarError: string;
  setAvatarError: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const isSizeValid = file.size <= 1024 * 1024;

    if (isImage && isSizeValid) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
      setAvatarError("");
    } else {
      setAvatar(null);
      setPreview("");
      if (!isImage) {
        setAvatarError("File must be an image");
      } else if (!isSizeValid) {
        setAvatarError("Image size should be less than 1MB");
      }
    }
  };

  const handleRemove = () => {
    setAvatar(null);
    setPreview(null);
  };
  return (
    <div className="relative flex items-center gap-[15px] w-full">
      {/* Preview */}
      {preview ? (
        <img
          src={preview}
          alt="avatar preview"
          className="rounded-full w-25 h-25 object-cover"
        />
      ) : (
        <div className="flex justify-center items-center border border-Grey-2 rounded-full w-25 h-25 overflow-hidden">
          <img
            src="/images/camera.svg"
            alt="camera icon"
            className="w-5 h-5 object-contain"
          />
        </div>
      )}

      {/* Upload new */}
      <label className="text-Dark-blue-2 text-sm cursor-pointer">
        Upload new
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* Remove */}
      {avatar && (
        <button
          type="button"
          onClick={handleRemove}
          className="text-Dark-blue-2 text-sm cursor-pointer"
        >
          Remove
        </button>
      )}
      {avatarError && (
        <p className="-bottom-[20px] left-[6px] absolute font-light text-[10px] text-Red">
          {avatarError}
        </p>
      )}
    </div>
  );
};

export default AvatarUploader;
