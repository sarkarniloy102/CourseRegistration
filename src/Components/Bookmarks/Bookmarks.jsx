import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks, credithour, remaininghour }) => {

    return (
        <div>
            <div className="rounded-xl shadow-xl bg-white p-5">
                <h2 className="text-lg font-bold border-b-2 mb-3 text-blue-400 p-3">Credit Hour Remaining {remaininghour} hr</h2>

                <h2 className="text-lg font-bold p-3">Course Name</h2>
                <div className="border-b-2 text-sm mb-2 font-light ">
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} idx={idx}></Bookmark>)
                    }
                </div>
                <h3 className="p-3 font-medium ">Total Credit Hour: {credithour} </h3>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    credithour: PropTypes.number,
    remaininghour: PropTypes.number
}
export default Bookmarks;