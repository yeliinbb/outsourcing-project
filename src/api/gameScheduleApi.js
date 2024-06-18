import supabase from '../supabase/supabaseClient';

export const fetchGameSchedule = async () => {
  try {
    const { data: gameSchedule, error } = await supabase
      .from('gameSchedule')
      .select('date, time, homeTeam, awayTeam, location');
    if (error) {
      throw error;
    }
    console.log('data => ', gameSchedule);
    return gameSchedule;
  } catch (error) {
    console.error('Failed to fetch game schedule:', error.message);
    throw new Error(`Failed to fetch game schedule : ${error.message}`);
  }
};
