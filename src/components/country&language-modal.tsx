"use client";

import React from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "@/store/location/location";

const schema = z.object({
  country: z.string().min(1).refine(val => val === "Pakistan", {
    message: "Country must be Pakistan",
  }),
  city: z.string().min(1, "City is required"),
  language: z.string().min(1).refine(val => val === "English", {
    message: "Language must be English",
  }),
});

type FormValues = z.infer<typeof schema>;

const pakistaniStates = [
  "All",
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Gilgit-Baltistan",
  "Islamabad Capital Territory",
  "Azad Jammu and Kashmir",
];

export default function CountryAndLanguageModal({ setOpen2 }: any) {
  const { country, city, language, setLocation } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      country,
      city,
      language,
    },
  });


  const onSubmit = async (data: FormValues) => {


    setLocation(data);

    setOpen2(false);
  };

  return (
    <div className="fixed transition-all backdrop-blur-xs inset-0 z-50 flex items-center justify-center bg-black/10 p-4">
      <div className="relative w-full max-w-lg rounded-xl bg-white shadow-lg p-6">
        <button
          onClick={() => setOpen2(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">Select Country & Language</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Country */}
          <div>
            <input
              {...register("country")}
              value="Pakistan"
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          {/* City / State */}
          <div>
            <select
              {...register("city")}
              className="w-full border border-slate-300 rounded-md px-3 py-2"
            >
              <option value="">Select State</option>
              {pakistaniStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          {/* Language */}
          <div>
            <input
              {...register("language")}
              value="English"
              readOnly
              className="w-full border border-slate-300 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
            />
            {errors.language && (
              <p className="text-red-500 text-sm">{errors.language.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-black py-2 rounded-md hover:bg-primary/90"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
