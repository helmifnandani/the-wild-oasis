import supabase from "./supabase";

export async function login() {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: "helmi@example.com",
    password: "iBtlKjzuCtlZPOFvLMzP",
  });
}
