const MILLISECONDS_PER_SECOND = 1000;

const swrConfig = {
  dedupingInterval: 60 * MILLISECONDS_PER_SECOND,
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export default swrConfig;
