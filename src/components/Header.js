import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
    <header className='header'>
        <h1 >{title}</h1>
        <Button color='green' text='Search' onClick={onClick}/>      
    </header>
  )
}

Header.defaultProps = {
    title: 'Default Title',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in style
// const headingStyle = {
//     color: 'black',
// }

export default Header
