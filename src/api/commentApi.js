import supabase from '../supabase/supabaseClient';

export const getComments = async () => {
  try {
    const { data, error } = await supabase.from('comments').select('*');
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Failed to get comment:', error.message);
    throw new Error(`Failed to get comment : ${error.message}`);
  }
};

export const addComments = async (comment) => {
  try {
    const { body, created_at, id, page_id } = comment;
    if (!body) {
      throw new Error('Body text are required');
    }
    const { data, error } = await supabase
      .from('comments')
      .insert([
        { body: body, id: id, created_at: created_at, page_id: page_id },
      ]);
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw new Error(`Failed to add comment: ${error.message}`);
  }
};
