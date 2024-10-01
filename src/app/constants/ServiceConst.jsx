import {
  FaChartLine,
  FaTruck,
  FaRegFileAlt,
  FaClipboardCheck,
  FaPlane,
  FaShieldAlt,
  FaCog,
  FaHeadset,
} from "react-icons/fa";

import { FaProductHunt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export const SERVICES = [
  {
    title: "Product Sourcing",
    description:
      "We help you find and source high-quality products that meet your specific requirements. Our extensive network allows us to connect you with reliable manufacturers across different sectors.",
    icon: <FaProductHunt className="text-5xl opacity-30" />, // Product sourcing icon
  },
  {
    title: "Quality Assurance",
    description:
      "Our team conducts thorough quality checks at every stage of the production process. We ensure that all products comply with international standards and regulations, giving you peace of mind.",
    icon: <FaCheckCircle className="text-5xl opacity-30" />, // Quality assurance icon
  },
  {
    title: "Market Research and Analysis",
    description:
      "We provide in-depth market research to identify opportunities and trends in target markets. Our insights help you make informed decisions about your export strategy.",
    icon: <FaChartLine className="text-5xl opacity-30" />, // Market research icon
  },
  {
    title: "Logistics Management",
    description:
      "We handle all logistics, including warehousing, transportation, and distribution. Our efficient supply chain solutions ensure timely and cost-effective delivery of your products.",
    icon: <FaTruck className="text-5xl opacity-30" />, // Logistics management icon
  },
  {
    title: "Customs Clearance Assistance",
    description:
      "Navigating customs regulations can be complex. We assist with all necessary documentation and compliance, ensuring a smooth customs clearance process for your shipments.",
    icon: <FaRegFileAlt className="text-5xl opacity-30" />, // Customs clearance icon
  },
  {
    title: "Documentation and Compliance",
    description:
      "We prepare and manage all export documentation, including invoices, packing lists, and certificates of origin. Our team ensures that all paperwork is accurate and compliant with importing country regulations.",
    icon: <FaClipboardCheck className="text-5xl opacity-30" />, // Documentation and compliance icon
  },
  {
    title: "Freight Forwarding Services",
    description:
      "We offer freight forwarding solutions tailored to your needs, whether by air, sea, or land. Our partnerships with trusted carriers guarantee competitive rates and reliable service.",
    icon: <FaPlane className="text-5xl opacity-30" />, // Freight forwarding icon
  },
  {
    title: "Risk Management",
    description:
      "We provide risk assessment and management strategies to protect your investments. This includes insurance options to safeguard your shipments against potential losses.",
    icon: <FaShieldAlt className="text-5xl opacity-30" />, // Risk management icon
  },
  {
    title: "Customized Solutions",
    description:
      "Understanding that every business is unique, we offer tailored export solutions to meet your specific needs, including custom packaging and branding options.",
    icon: <FaCog className="text-5xl opacity-30" />, // Customized solutions icon
  },
  {
    title: "Ongoing Support",
    description:
      "Our commitment to you doesn’t end with the sale. We provide ongoing support and communication to address any questions or concerns you may have throughout the export process.",
    icon: <FaHeadset className="text-5xl opacity-30" />, // Ongoing support icon
  },
];
