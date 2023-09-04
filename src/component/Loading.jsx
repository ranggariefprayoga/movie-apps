function Loading() {
  return (
    <div className="loading flex flex-col justify-center items-center m-24 gap-2">
      <img src="../../public/loading.svg" alt="" className="w-9 h-9 animate-spin" />
      <h1 className="text-red-500 font-semibold text-2xl">Sorry, Not Found Your Restaurant!</h1>
    </div>
  );
}

export default Loading;
