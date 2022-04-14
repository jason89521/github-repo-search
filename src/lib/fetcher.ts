const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw data;

    return data;
  } catch (error) {
    throw error;
  }
};

export default fetcher;
