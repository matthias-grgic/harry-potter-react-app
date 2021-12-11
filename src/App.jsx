import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";


function App() {
  const [students, setStudents] = useState([]);
  console.log(students);
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((studentsFromApi) => {
        const allStudents = studentsFromApi.map((student) => {
          return {
            name: student.name,
            house: student.house,
            patronus: student.patronus,
            eyeColour: student.eyeColour,
            image: student.image,
          };
        });
        setStudents(allStudents);
      });
  }, []);

  return (
    <div className="App">
      {students.map((student, index) => <CharacterCard key={index} student={student} /> )}  
    </div>
  );
}

export default App;
