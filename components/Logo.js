function Logo({ color = "text-white", size = "text-lg" }) {
  try {
    return (
      <div className="flex items-center space-x-3" data-name="logo">
        <img 
          src="https://app.trickle.so/storage/public/images/usr_0cb4258a40000001/218b34f2-7801-4264-bfd5-32020230dc30.png" 
          alt="Max Job Africa Logo" 
          className="h-12 w-auto"
        />
        <div className={`flex flex-col`}>
          <h1 className={`${size} font-medium tracking-wider ${color} leading-tight`}>
            MAX JOB AFRICA
          </h1>
          <span className={`text-xs ${color} opacity-90 tracking-wide`}>
            Multinational Recruitment Agency
          </span>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Logo component error:', error);
    reportError(error);
  }
}
