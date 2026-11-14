import PropTypes from 'prop-types'

const PropType = ({name}) => {

    return (
        <div>PropTypes: {name}</div>
    )
}



PropType.PropTypes = {
    name: PropTypes.number
}
export default PropType

