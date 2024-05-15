import { auth } from "@clerk/nextjs/server";
import { getHotelById } from "@/actions/getHoltelById";
import AddHotelForm from "@/components/hotel/AddHotelForm";

interface HotelPageProps {
  params: {
    hotelId: string;
  };
}
const Hotel = async ({ params }: HotelPageProps) => {
  const hotel = await getHotelById(params.hotelId);
  // const { userId } = auth();
  // if (!userId) return <>Not authentication...</>;
  // if (hotel && hotel.userId !== userId) return <>Access denied...</>;
  return (
    <div>
      <AddHotelForm hotel={hotel} />
    </div>
  );
};

export default Hotel;
