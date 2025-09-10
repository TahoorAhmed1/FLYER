"use client";

import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  language: z.string().min(1, "Language is required"),
});

type FormValues = z.infer<typeof schema>;

export default function CountryAndLanguageModal({ setOpen2}: any) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form submitted:", data);
    setOpen2(false); // close modal after submit
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
              placeholder="Country"
              className="w-full border border-slate-300 rounded-md px-3 py-2"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          {/* City */}
          <div>
            <input
              {...register("city")}
              placeholder="City"
              className="w-full border border-slate-300 rounded-md px-3 py-2"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          {/* Language */}
          <div>
            <input
              {...register("language")}
              placeholder="Language"
              className="w-full border border-slate-300 rounded-md px-3 py-2"
            />
            {errors.language && (
              <p className="text-red-500 text-sm">{errors.language.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
