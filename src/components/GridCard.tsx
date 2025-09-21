import { Link } from "react-router-dom";

const GridCard = ({
  image,
  title,
  price,
  id,
}: {
  image: string;
  title: string;
  price: number;
  id: number;
}) => {
  return (
    <Link to={`/${id}`}>
      <div className="flex flex-col gap-3">
        <div className="rounded-[10px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="product image"
          />
        </div>

        <div className="flex flex-col gap-0.5 font-medium text-Dark-blue">
          <h3 className="text-lg">{title}</h3>
          <p className="text-base">$ {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default GridCard;
