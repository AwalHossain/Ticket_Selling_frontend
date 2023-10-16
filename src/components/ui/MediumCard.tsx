import Image from "next/image";

const MediumCard = ({ title, content, img }: any) => {
    return (
        <div className="cursor-pointer hover:scale-105 transition duration-200 ease-out space-x-2 m-2 mt-5 rounded-xl">
            <div className="relative h-[145px] w-[195px]  lg:h-[227px] lg:w-[400px] ">
                <Image
                    src={img}
                    layout="fill"
                    className="object-cover w-full h-full rounded-t-lg sm:rounded-t-xl md:rounded-none md:rounded-l-lg"
                    alt="Card Image"
                />
            </div>
            <div className="space-y-1">
                <h2 className="text-xl font-semibold mt-3">{title}</h2>
                <h3 className="text-sm text-gray-700">Oct 20 Madison Square Garden</h3>
                <h2 className="text-sm">From $265</h2>
            </div>
        </div>
    );
};

export default MediumCard;
