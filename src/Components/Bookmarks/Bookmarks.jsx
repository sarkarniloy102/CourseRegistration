import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks }) => {

    return (
        <div>
            <div className="rounded-xl shadow-xl bg-white p-5">
                <h2 className="text-xl font-bold border-b-2 mb-3 text-blue-400 p-3">Credit Hour Remaining  hr</h2>

                <h2 className="text-xl font-bold p-3">Course Name</h2>
                <div className="border-b-2 text-sm">
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} idx={idx}></Bookmark>)
                    }
                </div>

            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;