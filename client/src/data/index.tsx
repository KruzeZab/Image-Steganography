import {
  FcDataEncryption,
  FcLock,
  FcPieChart,
  FcPrivacy,
  FcSearch,
  FcUnlock,
} from "react-icons/fc";

interface Features {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const features: Features[] = [
  {
    title: "Authentication",
    description:
      "You can establish a secure login process that prevents unauthorized access and keeps your sensitive information safe from prying eyes.",
    icon: <FcLock fontSize={"32px"} />,
  },
  {
    title: "Dashboard",
    description:
      "With an intuitive, user-friendly interface, you can quickly and easily get a bird's-eye view of your encryption and decryption history.",
    icon: <FcPieChart fontSize={"32px"} />,
  },
  {
    title: "Encryption",
    description:
      "Encrypt your data for robust security and privacy protection and enables you to share message with strong encryption using image.",
    icon: <FcDataEncryption fontSize={"32px"} />,
  },
  {
    title: "Decryption",
    description:
      "Decode your encrypted data and gain valuable insights with powerful decryption tools.. Decrypt the data with the key you received.",
    icon: <FcUnlock fontSize={"32px"} />,
  },
  {
    title: "Track Activities",
    description:
      "Track and monitor your history of encryption, decryption and sharing. See the bigger picture with comprehensive activity tracking.",
    icon: <FcSearch fontSize={"32px"} />,
  },
  {
    title: "Privacy",
    description:
      "Protect your digital footprint and safeguard your privacy, ensuring your online activities and sensitive information remain private and confidential.",
    icon: <FcPrivacy fontSize={"32px"} />,
  },
];

interface FAQProps {
  title: string;
  description: string;
}

export const faqs: FAQProps[] = [
  {
    title: "What is image steganography?",
    description:
      "Image steganography is the practice of hiding secret data or messages within an image file without altering the image's visual appearance.",
  },
  {
    title: "How does image steganography work?",
    description:
      "Image steganography works by embedding the secret data or message into the least significant bits of the image's pixels. This allows the data to be hidden within the image without altering its visual appearance.",
  },
  {
    title: "How can I detect if an image contains hidden data?",
    description:
      "here are several software tools available for detecting hidden data in images, such as steganalysis software. These tools analyze the image to detect any anomalies or patterns that suggest the presence of hidden data.",
  },
  {
    title: "What are the limitations of image steganography?",
    description:
      "The limitations of image steganography include the limited amount of data that can be hidden within an image, the possibility of detection by sophisticated software, and the risk of unintentional disclosure of the hidden data.",
  },
  {
    title: "What are the applications of image steganography?",
    description:
      "Image steganography has several applications, including covert communication, copyright protection, and digital watermarking.",
  },
  {
    title: "What are the different image steganography techniques?",
    description:
      "There are several types of image steganography techniques, including LSB (Least Significant Bit) steganography, spatial domain steganography, and frequency domain steganography.",
  },
];
