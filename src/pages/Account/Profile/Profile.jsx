import React, { useState } from "react";
import styles from "./Profile.module.css";
import { EditIcon, CameraIcon } from "../../../icons";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.profileContainer}>
      {/* Profile Picture Section */}
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>
          <span className={styles.avatarText}>AG</span>
          {/* <label htmlFor="profileUpload" className={styles.cameraIcon}>
            <CameraIcon />
          </label> */}
          {/* <input
            id="profileUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          /> */}
        </div>
      </div>

      {/* Input Fields */}
      <div className={styles.form}>
        {/* Name */}
        <div className={styles.inputGroup}>
          <input type="text" defaultValue="Arghya Ghosh" />
        </div>

        {/* Phone */}
        <div className={styles.inputGroup}>
          <input type="text" defaultValue="+91 1234567890" />
          <EditIcon className={styles.editIcon} />
        </div>

        {/* Email */}
        <div className={styles.inputGroup}>
          <input type="email" defaultValue="xyz@example.com" />
          <EditIcon className={styles.editIcon} />
        </div>
      </div>

      {/* Update Button */}
      <button className={styles.updateBtn}>UPDATE</button>
    </div>
  );
};

export default Profile;
