import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  // nama image harus unique, jadi dikasih math.random awalnya
  // dikasih replace All akhirnya biar kalau ada image yang ada / nya, sama supabase ngga dibikin folder baru
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // imagePath ini yang disimpan di dalam supabase table
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;

  // https://iqsqhqlcdnccmzxaimab.supabase.co/storage/v1/object/public/cabin-image/cabin-001.jpg
  // 1. Create cabin itself
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  // 2. If success, upload image

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
