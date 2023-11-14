import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, version}) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
    <header className='header'>
        <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <h1>{title}</h1>
            <h3>{version}</h3>
        </div>
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
