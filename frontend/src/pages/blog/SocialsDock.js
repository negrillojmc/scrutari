import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
} from "react-share";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

const SocialsDock = () => {
  const shareUrl = window.location.href;

  return (
    <div className="col-span-4 flex justify-end items-center text-gray-500 mb-8 xl:mb-0">
      <FacebookShareButton url={shareUrl}>
        <FaFacebook size={20} round={true} className="ml-2" />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={shareUrl} className="ml-2">
        <FaFacebookMessenger size={20} round={true} />
      </FacebookMessengerShareButton>
      <TwitterShareButton url={shareUrl} className="ml-2">
        <FaSquareXTwitter size={20} round={true} />
      </TwitterShareButton>
    </div>
  );
};

export default SocialsDock;
