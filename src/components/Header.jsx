export default function Headers() {
    return (
        <div className="text-center mb-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-white text-3xl font-bold tracking-[0.3em]">
                    TODO
                </h1>
                <button className="text-white/80 hover:text-white transition-colors ml-4">
                    {/* Moon icon placeholder */}
                    <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
