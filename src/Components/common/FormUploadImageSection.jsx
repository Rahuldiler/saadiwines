import { Box, FormLabel } from "@mui/material";
import React from "react";
import Image from "next/image";

function FormUploadImageSection({ handleImgChange, formikImg, index }) {
  return (
    <Box
      sx={{
        my: "20px",
      }}
    >
      <FormLabel component="legend">
        Upload Image <span>(optional)</span>
      </FormLabel>
      <Box
        sx={{
          my: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* <div className={styles.uploadBtnWrapper}>
          <button className={styles.btn}>+</button>
          <FileBase
            type="file"
            name="image"
            multiple={false}
            onDone={({ base64 }) => handleImgChange(base64, index)}
          />
        </div> */}
        <div className="uploadBtnWrapper">
          <button className="btn">+</button>
          <input
            type="file"
            onChange={(event) => handleImgChange(event, index)}
          />
        </div>

        {formikImg && (
          <Image
            src={formikImg}
            alt=".."
            width={100}
            height={100}
            style={{ borderRadius: "5px" }}
          />
        )}
      </Box>
    </Box>
  );
}

export default FormUploadImageSection;
