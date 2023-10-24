import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MainContainer } from "../../styles/socialMedia.styles";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";

const SocialMedia = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <MainContainer>
      <div
        className="icon"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/satyamsrivastava1610?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          )
        }
      >
        <LinkedInIcon fontSize="medium" />
      </div>
      <div
        className="icon"
        onClick={() => window.open("https://github.com/SatyamSrivastava7")}
      >
        <GitHubIcon fontSize="medium" />
      </div>
      <div
        className="icon"
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGDBdBQtdDWNtjrWFJgWVgLwJjKvjqhHFVRxfPpGVkvvxNRPnwPrHLVCBQMRkJJkJdCLV"
          )
        }
      >
        <MailIcon fontSize="medium" />
      </div>
      <CopyToClipboard text={"+916388343929"} onCopy={() => setOpen(true)}>
        <div className="icon">
          <WhatsAppIcon fontSize="medium" />
        </div>
      </CopyToClipboard>
      <Snackbar
        className="snackbar"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        message="Contact copied successfully !!"
      />
    </MainContainer>
  );
};

export default SocialMedia;
