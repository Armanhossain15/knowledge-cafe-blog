const Bookmark = ({bookmark}) => {
    return (
        <div className="py-6 px-6 bg-white mb-5 rounded-xl ">
            <h4 className="text-xl">{bookmark.title}</h4>
        </div>
    );
};

export default Bookmark;