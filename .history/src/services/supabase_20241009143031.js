import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iqsqhqlcdnccmzxaimab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxc3FocWxjZG5jY216eGFpbWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0NDYxNTcsImV4cCI6MjA0NDAyMjE1N30.vJHzqR_CnqQVS--P1yIWH245hgEiSxO-iXQpTXPTSEs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
