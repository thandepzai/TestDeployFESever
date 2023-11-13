import React from "react";
import Image from "next/image";

interface Props {
  brandName: string;
  imageSrc: string;
}
const BrandBox: React.FC<Props> = ({ brandName, imageSrc }) => {
  return (
    <div className="relative flex items-center p-3 lg:p-2">
      <Image src={imageSrc} width={300} height={175} alt={brandName} />
      <div className="absolute"></div>
    </div>
  );
};

export default BrandBox;
