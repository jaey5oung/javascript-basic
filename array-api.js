//1
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(); //배열을 스트링으로 변환해준다
}

//2
{
  const fruits = '사과,키위,바나나,체리';
  const result = fruits.split(','); //스트링을 배열로 변환해준다
  console.log(result);
}

//3
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); //배열을 거꾸로 만들어준다 5,4,3,2,1
  console.log(result);
}

//4
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2); //slice차이점 스플라이스는 배열자체를 수정하지만 슬라이스는 수정한배열을따로만들어주고 기존배열을 유지시켜준다
  console.log(result);
}

//5

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

//학생의점수가 90점이상인경우
{
  const result = students.find(function (student, index) {
    return student.score === 90;
  });
}

//학생들중에서 수업에 등록한 한 학생들만 찾아라 필터는 트루만 리턴된다
{
  const result = students.filter((student) => student.enrolled);
}

//점수만 뽑아라 map은 배열안에있는 요소들을 원하는 함수로 가공해서 다른방식의 데이터를 만들고싶을때
{
  const result = students.map((students) => students.score);
  console.log(result);
}

//배열안에 50점보다 작은학생이있는지없는지

{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}

//학생들의 평균점수

{
  const result = students.reduce((prev, curr) => {
    prev + curr.score;
    console.log(result / students.length);
  });
}

//학생들의 모든점수를 스트링으로
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

//낮은점수로 변환하기

{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
