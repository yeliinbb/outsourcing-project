const youtubeKey = import.meta.env.VITE_YOUTUBE_KEY;

export const fetchPlaylistItems = async (playlistId) => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=12&key=${youtubeKey}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  const data = await response.json();
  return data.items;
};
