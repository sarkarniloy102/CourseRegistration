
import PropTypes from 'prop-types'

const Course = ({ course, handlebookmarks }) => {
    const { title, description, price, course_img, credit } = course;
    return (
        <div className="space-y-3 bg-white shadow-xl p-4 rounded-xl">
            <div className="p-2">
                <img className="w-full " src={course_img} alt="" />
            </div>

            <p className="text-sm font-semibold">{title}</p>
            <p className="text-sm font-light">{description}</p>

            <div className="flex justify-between items-center text-xs font-medium">
                <div className="flex items-center gap-3">
                    <p>$</p>
                    <p>Price: {price}</p>
                </div>

                <div>
                    <p>Credit: {credit}hr</p>
                </div>
            </div>
            <button onClick={() => handlebookmarks(course)} className='w-full bg-blue-500 text-white rounded-xl py-2'>Select</button>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handlebookmarks: PropTypes.func
}
export default Course;