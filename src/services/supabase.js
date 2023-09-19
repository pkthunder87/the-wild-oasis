import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kbkxmikpvzszvtvmtsbk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtia3htaWtwdnpzenZ0dm10c2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMDg0NDgsImV4cCI6MjAxMDY4NDQ0OH0.d3xHF48psVdvrsNkxWgjy3-9Y3AEgX7vGRXpV7Cfft0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
