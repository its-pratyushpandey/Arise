"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ProfileBannerUpload({ onChange, bannerUrl, avatarUrl, onAvatarChange }) {
  const bannerInput = useRef();
  const avatarInput = useRef();
  const [bannerPreview, setBannerPreview] = useState(bannerUrl || "");
  const [avatarPreview, setAvatarPreview] = useState(avatarUrl || "");

  const handleBanner = e => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setBannerPreview(url);
      onChange(url);
    }
  };
  const handleAvatar = e => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
      onAvatarChange(url);
    }
  };
  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-blue-800">Profile Banner</span>
        <input type="file" accept="image/*" ref={bannerInput} onChange={handleBanner} className="hidden" />
        <Button type="button" onClick={() => bannerInput.current.click()} className="bg-blue-700 text-white w-fit">Upload Banner</Button>
        {bannerPreview && (
          <motion.img src={bannerPreview} alt="Banner Preview" className="w-full max-h-40 object-cover rounded-xl border border-blue-200" initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-semibold text-blue-800">Profile Avatar</span>
        <input type="file" accept="image/*" ref={avatarInput} onChange={handleAvatar} className="hidden" />
        <Button type="button" onClick={() => avatarInput.current.click()} className="bg-blue-700 text-white w-fit">Upload Avatar</Button>
        {avatarPreview && (
          <motion.img src={avatarPreview} alt="Avatar Preview" className="w-24 h-24 object-cover rounded-full border-2 border-blue-300" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} />
        )}
      </div>
    </div>
  );
}
