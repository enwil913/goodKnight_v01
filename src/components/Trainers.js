const Trainers = ({ trainers }) => {

  return (
    <>
      {trainers.map((trainer) => (
        <h3 key={trainer.id}>{trainer.name}</h3>
      ))}
    </>
  )
}

export default Trainers
