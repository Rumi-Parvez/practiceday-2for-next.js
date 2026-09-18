const loading = () => {
    return (
        <>
            <div className="h-200 w-full flex justify-center items-center">
                <h1 className="flex justify-center items-center text-7xl">
                    <span className="loading loading-bars loading-xs"></span>
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                    <span className="loading loading-bars loading-xl"></span>            </h1>
            </div>
        </>
    );
};

export default loading;