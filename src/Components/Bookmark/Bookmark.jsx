import PropTypes from 'prop-types';

const Bookmark = ({ bookmark, idx }) => {
    const { title } = bookmark;
    return (
        <ol className=''>
            <li className="text-base  p-2 rounded-lg ">{idx + 1} {title}</li>
        </ol>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
    idx: PropTypes.number
}

export default Bookmark;