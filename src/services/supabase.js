import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bbbslkhoysmlofjcwxfe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiYnNsa2hveXNtbG9mamN3eGZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyNDM0NjEsImV4cCI6MjA0ODgxOTQ2MX0.6lU9zOqtB8iFjNiDzpeyZHUWGkezLznDq1QgwGqhArU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
