// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  const selectedItems = Object.keys(list).filter((item) => list[item] === true)
  return (
    <ul>
      {selectedItems.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  )
}

// This is the main component being exported from this file
export default function AnswersItem({ answerItem: { id, username, email, color, time, review }, setForm }) {
  const handleEditButton = () => {
    setForm({
      id,
      username,
      email,
      color,
      time,
      review,
    })
  }
  return (
    <li>
      <article className="answer">
        <i>{email}</i>
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{color}</span>
        </p>
        <div>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={time} />
        </div>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
        <button className="edit__button" onClick={() => handleEditButton()}>Edit</button>
      </article>
    </li>
  );
}
