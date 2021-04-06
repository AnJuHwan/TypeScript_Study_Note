{
  //intersection Types: &
  // 선언된 type 다 지정 해줘야 됨.
  type Student = {
    name: string;
    scroe: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'JuHwan',
    scroe: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
