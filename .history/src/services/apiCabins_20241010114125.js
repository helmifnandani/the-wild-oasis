import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;

  let query = supabase.from("cabins");

  // 1. Create cabin itself if no Id
  if (!id) query.insert([{ ...newCabin, image: imagePath }]);

  // 1. Edit cabin if have Id
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  // 2. If success, upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-image")
    .upload(imageName, newCabin.image);

  // 3. Kalau upload gagal, Delete cabin
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.error(storageError);
    throw new Error(
      "Cabins image could not be uploaded. Cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return error;
}
