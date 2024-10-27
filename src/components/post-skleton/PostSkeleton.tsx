const PostSkeleton = () => {
  return (
    <div className="w-full mb-10 lg:h-[935px] px-7 py-9 flex flex-col gap-2 bg-[#09090A] rounded-[30px] animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 bg-gray-700 rounded-full"></div>
        <div>
          <div className="w-32 h-4 bg-gray-700 rounded"></div>
          <div className="w-24 h-3 bg-gray-600 rounded mt-1"></div>
        </div>
      </div>
      <div className="w-full h-6 bg-gray-700 rounded mt-4"></div>
      <div className="w-full h-72 lg:h-[520px] md:h-[420px] sm:h-[320px] bg-gray-700 rounded mt-4"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
      </div>
      <div className="flex items-center gap-3 mt-10">
        <div className="w-14 h-14 bg-gray-700 rounded-full"></div>
        <div className="w-full h-11 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default PostSkeleton;
