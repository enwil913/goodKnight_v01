import Trainer from "./Trainer"


const Trainers = ({ trainers }) => {

  return (
    <>
      {trainers.map((trainer) => (
        <Trainer key={trainer.id} trainer={trainer}/>
      ))}
    </>
  )
}

export default Trainers
