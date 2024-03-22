import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({ bookmarks, readingTime }) => {
    return <>
        <div className="md:w-1/3 bg-slate-100 p-7">
            <div className="border-2 border-purple-800 bg-slate-200 p-7  rounded-xl">
                <h3 className="text-purple-800 text-2xl">Spent time on read {readingTime} min</h3>
            </div>
            <div className=" py-7">
                <h2 className="text-3xl font-bold mb-5
            ">Bookmarks : {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    </>;
};

export default Bookmarks;