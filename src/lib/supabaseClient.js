import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bwjihwxkudaojlnqvyux.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3amlod3hrdWRhb2psbnF2eXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNTAyNzEsImV4cCI6MjA2NTcyNjI3MX0.t___ZbeVJFMDsCW_uq9B6q-ChfrfM6BCV0cI6kayQdM';

export const supabase = createClient(supabaseUrl, supabaseKey);