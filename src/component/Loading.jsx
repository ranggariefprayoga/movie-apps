function Loading() {
  return (
    <div className="loading flex flex-col justify-center items-center m-24 gap-2">
      <img src="/loading.svg" alt="Loading" className="image-loading w-9 h-9 animate-spin" loading="lazy" />
    </div>
  );
}

export default Loading;
