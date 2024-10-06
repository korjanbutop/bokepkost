import MessageBox from "../message-box";
import VideoCard from "../video-card";
import doodstream from "@/lib/doodstream";

const SearchCardList = async ({
    query,
    banner,
}: {
    query: string;
    banner?: boolean;
}) => {
    const data = await doodstream.search({ query });

    return (
        <div className="flex flex-col">
            {banner && (
                <div className="my-6 mb-8 text-center">
                    <h1 className="text-sm md:text-xl uppercase">
                        {query} Porn Videos
                    </h1>
                </div>
            )}
            {data.result.length ? (
                <div className="grid grid-cols-2 gap-0 md:grid-cols-3 md:gap-3 xl:grid-cols-4">
                    {data.result.map((video: any) => {
                        return (
                            <VideoCard
                                key={video.file_code}
                                video={video}
                            ></VideoCard>
                        );
                    })}
                </div>
            ) : (
                <MessageBox title="No results found" variant="info">
                    <p className="text-center">Try a shorter search term.</p>
                </MessageBox>
            )}
        </div>
    );
};

export default SearchCardList;
