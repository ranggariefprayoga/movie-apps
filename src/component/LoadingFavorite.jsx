function LoadingFavorite() {
  return (
    <div className="loading flex flex-col justify-center items-center m-9 gap-2" id="favorite">
      <img src="../../public/loading.svg" alt="Loading" className="w-9 h-9 animate-spin" loading="lazy" />
      <h1 className="text-red-500 font-semibold text-2xl">Sorry, You Don`t Have Restaurants Favorite!</h1>
    </div>
  );
}

export default LoadingFavorite;
