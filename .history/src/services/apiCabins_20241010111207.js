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
  // di spread newCabinnya, dan imagenya diganti imagePath, karena dapat data diawal newCabinnya itu, imagenya sebagai object file. jadi harus diganti jadi imagePath
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  // 2. If success, upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Kalau upload gagal, Delete cabin
  if (storageError) {
    debugger;
    await supabase.from("cabins").delete().eq("id", data.id);
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
