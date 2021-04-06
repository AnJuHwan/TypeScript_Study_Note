{
  // Enum

  // JavaScript

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;

  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOFToday = DAYS_ENUM.TUESDAY;
  console.log(dayOFToday);

  // TypeScript
  type DaysOFWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday, // 0 (1부터 지정하고 싶으면) Monday = 1, 1부터시작 , 문자열도 가능
    Tuesday, //1 Tuesday = 'tu'
    Wednesday, //2 Wednesday = 'wd' ...
    Thursday, //3
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 숫자도 쓸 수 있음
  // TypeScript에서 enum 사용을 권장 안함
  // Type이 정확하게 인정되지 않음.
  console.log(day);

  let dayOFweek: DaysOFWeek = 'Monday';
  dayOFweek = 'Wednesday';
  // enum을 union type으로 바꿔 쓸 수 있음
}
