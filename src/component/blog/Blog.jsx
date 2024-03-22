import PropTypes from 'prop-types';
import { BsBookmarkFill } from "react-icons/bs";

const Blog = ({blog, handleBookMark, handleMakeAdRead}) => {
    const {title, img, reading_time, author_name, author_img, publish_date, keywords} = blog
    return (
        <div className='space-y-4'>
            <img src={img} alt={`cover pic of the title ${title}`}></img>
            <div className='flex justify-between'>
                <div className='flex items-center gap-6'>
                <img src={author_img}></img>
                <div>
                <h2 className='text-2xl font-semibold'>{author_name}</h2>
                <p>{publish_date}</p>
                </div>
                </div>
                <div className='flex items-center gap-3'>
               <span>{reading_time}min read</span>
               <button onClick={()=>handleBookMark(blog)} className='text-2xl'>
               <BsBookmarkFill />
                </button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p>
                {
                    keywords.map((hash, index)=> <span className='mr-4 text-blue-800'  key={index}><a href="">#{hash}</a></span>)
                }
            </p>
            <h3 onClick={()=>handleMakeAdRead(reading_time)}
            className='text-xl text-purple-800 underline cursor-pointer'>Make as Read</h3>
        </div>
    );
};

Blog.prototypes = {
    blog:PropTypes.object.isRequired
}
export default Blog;