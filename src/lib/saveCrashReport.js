import { supabase } from './supabaseClient';

export const saveCrashReport = async (data) => {
  const { data: saved, error } = await supabase
    .from('crash_reports')
    .insert([{ form_data: data }]);

  if (error) {
    console.error('Error saving crash report:', error);
  } else {
    console.log('Crash report saved:', saved);
  }
};