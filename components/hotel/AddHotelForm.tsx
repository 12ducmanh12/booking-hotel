"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Hotel, Room } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { UploadButton } from "../uploadthing";
interface AddHotelFormProps {
  hotel: HotelWithRooms | null;
}
export type HotelWithRooms = Hotel & {
  rooms: Room[];
};
const formSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  description: z
    .string()
    .min(10, { message: "description must be at least 10 characters long" }),
  image: z.string().min(1, { message: "image is required" }),
  country: z.string().min(1, { message: "country is required" }),
  state: z.string().optional(),
  city: z.string().optional(),
  locationDescription: z.string().min(10, {
    message: "locationDescription must be at least 10 characters long",
  }),
  gym: z.boolean().optional(),
  spa: z.boolean().optional(),
  bar: z.boolean().optional(),
  laundry: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  freeWifi: z.boolean().optional(),
  movieNights: z.boolean().optional(),
  swimmingPool: z.boolean().optional(),
  coffeShop: z.boolean().optional(),
});
const AddHotelForm = ({ hotel }: AddHotelFormProps) => {
  const [image, setImage] = useState<string | undefined>(hotel?.image);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      country: "",
      state: "",
      city: "",
      locationDescription: "",
      gym: false,
      spa: false,
      bar: false,
      laundry: false,
      restaurant: false,
      shopping: false,
      freeParking: false,
      bikeRental: false,
      freeWifi: false,
      movieNights: false,
      swimmingPool: false,
      coffeShop: false,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="font-semibold text-xl">
            {hotel ? "Update your hotel!" : "Dscrible your hotel!"}
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hotel title</FormLabel>
                    <FormDescription>Provide your hotel name</FormDescription>
                    <FormControl>
                      <Input placeholder="Beach hotel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hotel description</FormLabel>
                    <FormDescription>
                      Provide detail of your hotel description
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="Beach hotel is parked with many awesome amenitie!"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormDescription>Provide your hotel name</FormDescription>
                    <FormControl>
                      <Input placeholder="Beach hotel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />{" "}
              <div>
                <FormLabel>Choose Amenities</FormLabel>
                <FormDescription>
                  Choose Amenities popular in your hotel
                </FormDescription>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <FormField
                    control={form.control}
                    name="gym"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Gym</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="spa"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Spa</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bar"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Bar</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="laundry"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Laundry</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="restaurant"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Restaurant</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="shopping"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Shopping</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="freeParking"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Free parking</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bikeRental"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Bike rental</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="freeWifi"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Free wifi</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="movieNights"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Movie nights</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="swimmingPool"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Swimming pool</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coffeShop"
                    render={({ field }) => (
                      <FormItem className="flex flex-row gap-x-3 items-end border p-4 rounded-md">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>Coffe Shop</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Upload Image</FormLabel>
                    <FormDescription>upload image of your hotel or your rooms</FormDescription>
                    <FormControl className="border border-dashed rounded-md p-12 border-primary/50">
                      {image ? (
                        <>
                          <img src={image} alt="image" />
                        </>
                      ) : (
                        <div>
                          <UploadButton
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                              setImage(res[0].url);
                              console.log("Files: ", res[0].url);
                            }}
                            onUploadError={(error: Error) => {
                              // Do something with the error.
                              alert(`ERROR! ${error.message}`);
                            }}
                          />
                        </div>
                      )}
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex-1 flex flex-col gap-6">Part 2</div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddHotelForm;
