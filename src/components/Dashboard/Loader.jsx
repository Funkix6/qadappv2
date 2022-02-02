const Loader = () => (
    <div className="flex justify-center items-center space-x-2">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700" />
      <span className="text-sm text-gray-400 justify-center"> Please wait while the transaction is performed. The page will refresh automaticly.</span>
    </div>
  );
  
  export default Loader;    