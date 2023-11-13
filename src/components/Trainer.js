const Trainer = ({ trainer }) => {
  return (
    <div className='trainer'>
        <h3>{trainer.name}</h3>
        <p>{trainer.shortName}</p>  
    </div>
  )
}

export default Trainer
