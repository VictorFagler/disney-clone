"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "/components/ui/form";
import * as z from "zod";
import { Input } from "./ui/input";

// Define schema using zod (no typescript here, just validation)
const formSchema = z.object({
  input: z.string().min(2).max(50),
});

function SearchInput() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  // Handle form submission
  function onSubmit(values) {
    // Do something with the form values.
    // This will be type-safe if you use the right libraries, but we won't define types here
    console.log(values);
    router.push(`/search/${values.input}`);
    form.reset();
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Search.." {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
        </form>
      </Form>
    </>
  );
}

export default SearchInput;
