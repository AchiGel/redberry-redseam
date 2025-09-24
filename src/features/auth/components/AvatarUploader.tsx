import { useState } from "react";

const AvatarUploader = ({
  avatar,
  setAvatar,
}: {
  avatar: File | null;
  setAvatar: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
  const [preview, setPreview] = useState<string | null>("/images/avatar.png");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    setAvatar(null);
    setPreview(null);
  };
  return (
    <div className="flex items-center gap-[15px] w-full">
      {/* Preview */}
      {preview && (
        <img
          src={preview}
          alt="avatar preview"
          className="rounded-full w-25 h-25 object-cover"
        />
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
    </div>
  );
};

export default AvatarUploader;
